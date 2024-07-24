package io.justina.server.services.impl;

import io.justina.server.dtos.request.PatientRequestDTO;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.exceptions.PatientNotFoundException;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.repositories.PatientRepository;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private FinancierRepository financierRepository;

    private final String DEFAULT_PASSWORD = "12345Aa*";

    @Override
    public PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO) {
        Role patientRole = roleRepository.findByName("PATIENT")
                .orElseThrow(() -> new RuntimeException("Role PATIENT not found"));

        Financier financier = financierRepository.findById(patientRequestDTO.getIdFinancier())
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        Document document = Document.builder()
                .documentType(DocumentType.valueOf(patientRequestDTO.getDocumentType()))
                .documentNumber(patientRequestDTO.getDocumentNumber())
                .build();

        Address address = Address.builder()
                .street(patientRequestDTO.getStreet())
                .number(patientRequestDTO.getNumber())
                .district(patientRequestDTO.getDistrict())
                .city(patientRequestDTO.getCity())
                .province(patientRequestDTO.getProvince())
                .postalCode(patientRequestDTO.getPostalCode())
                .build();

        User user = User.builder()
                .email(patientRequestDTO.getEmail())
                .password(passwordEncoder.encode(DEFAULT_PASSWORD))
                .firstName(patientRequestDTO.getFirstName())
                .lastName(patientRequestDTO.getLastName())
                .birthDate(patientRequestDTO.getBirthDate())
                .phone(patientRequestDTO.getPhone())
                .role(patientRole)
                .isActive(true)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Patient patient = Patient.builder()
                .user(user)
                .medicalHistory(patientRequestDTO.getMedicalHistory())
                .pathologies(patientRequestDTO.getPathologies())
                .transplanted(patientRequestDTO.getTransplanted())
                .bloodType(patientRequestDTO.getBloodType())
                .civilStatus(patientRequestDTO.getCivilStatus())
                .children(patientRequestDTO.getChildren())
                .crossTransplant(patientRequestDTO.getCrossTransplant())
                .tutorFullName(patientRequestDTO.getTutorFullName())
                .tutorPhone(patientRequestDTO.getTutorPhone())
                .financier(financier)
                .build();

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll().stream()
                .map(PatientResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponseDTO getPatientById(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO updatePatient(Long patientId, PatientRequestDTO patientRequestDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        Financier financier = financierRepository.findById(patientRequestDTO.getIdFinancier())
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        User user = patient.getUser();
        user.setFirstName(patientRequestDTO.getFirstName());
        user.setLastName(patientRequestDTO.getLastName());
        user.setEmail(patientRequestDTO.getEmail());
        user.setBirthDate(patientRequestDTO.getBirthDate());
        user.setPhone(patientRequestDTO.getPhone());

        Document document = user.getDocument();
        document.setDocumentType(DocumentType.valueOf(patientRequestDTO.getDocumentType()));
        document.setDocumentNumber(patientRequestDTO.getDocumentNumber());

        Address address = user.getAddress();
        address.setStreet(patientRequestDTO.getStreet());
        address.setNumber(patientRequestDTO.getNumber());
        address.setDistrict(patientRequestDTO.getDistrict());
        address.setCity(patientRequestDTO.getCity());
        address.setProvince(patientRequestDTO.getProvince());
        address.setPostalCode(patientRequestDTO.getPostalCode());

        user.setDocument(document);
        user.setAddress(address);

        patient.setMedicalHistory(patientRequestDTO.getMedicalHistory());
        patient.setPathologies(patientRequestDTO.getPathologies());
        patient.setTransplanted(patientRequestDTO.getTransplanted());
        patient.setBloodType(patientRequestDTO.getBloodType());
        patient.setCivilStatus(patientRequestDTO.getCivilStatus());
        patient.setChildren(patientRequestDTO.getChildren());
        patient.setCrossTransplant(patientRequestDTO.getCrossTransplant());
        patient.setTutorFullName(patientRequestDTO.getTutorFullName());
        patient.setTutorPhone(patientRequestDTO.getTutorPhone());
        patient.setFinancier(financier);

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Transactional
    @Override
    public PatientResponseDTO deletePatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        patientRepository.delete(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public void deactivatePatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        User user = patient.getUser();
        user.setIsActive(false);
        patientRepository.save(patient);
    }

    @Override
    public PatientResponseDTO uploadPatientFile(Long patientId, MultipartFile file) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        try {
            byte[] fileBytes = file.getBytes();
            if (patient.getFiles() == null) {
                patient.setFiles(new ArrayList<>());
            }
            patient.getFiles().add(fileBytes);
            patient = patientRepository.save(patient);
            return new PatientResponseDTO(patient);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload file", e);
        }
    }

}
