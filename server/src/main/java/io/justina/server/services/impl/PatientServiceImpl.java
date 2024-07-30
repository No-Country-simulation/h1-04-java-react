package io.justina.server.services.impl;

import io.justina.server.dtos.request.*;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.exceptions.DocumentNumberAlreadyExistsException;
import io.justina.server.exceptions.EmailAlreadyExistsException;
import io.justina.server.exceptions.PatientNotFoundException;
import io.justina.server.exceptions.RegistrationException;
import io.justina.server.repositories.*;
import io.justina.server.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
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

    @Autowired
    private InstitutionRepository institutionRepository;

    private final String DEFAULT_PASSWORD = "12345Aa*";

    @Override
    public PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO) {
        if (patientRepository.existsByEmail(patientRequestDTO.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists.");
        }

        if (patientRepository.existsByDocumentNumber(patientRequestDTO.getDocumentNumber())) {
            throw new DocumentNumberAlreadyExistsException("Document number already exists.");
        }

        try {
            Role patientRole = roleRepository.findByName("PATIENT")
                    .orElseThrow(() -> new RuntimeException("Role PATIENT not found"));

            Financier financier = financierRepository.findById(patientRequestDTO.getIdFinancier())
                    .orElseThrow(() -> new RuntimeException("Financier not found"));

            Institution noCountryInstitution = institutionRepository.findByName("NO_COUNTRY")
                    .orElseThrow(() -> new RuntimeException("Institution NO_COUNTRY not found"));

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
                    .institution(noCountryInstitution)
                    .document(document)
                    .address(address)
                    .build();

            user = userRepository.save(user);

            Patient patient = Patient.builder()
                    .user(user)
                    .medicalHistory(patientRequestDTO.getMedicalHistory() != null ? patientRequestDTO.getMedicalHistory() : new ArrayList<>())
                    .pathologies(patientRequestDTO.getPathologies() != null ? patientRequestDTO.getPathologies() : new ArrayList<>())
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
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll().stream()
                .map(PatientResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public List<String> getPatientFiles(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        // Convertir los archivos a base64 para poder enviarlos en la respuesta
        return patient.getFiles().stream()
                .map(fileBytes -> Base64.getEncoder().encodeToString(fileBytes))
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponseDTO getPatientById(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO updatePatient(Long patientId, PatientUpdateDTO patientUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        Financier financier = financierRepository.findById(patientUpdateDTO.getIdFinancier())
                .orElseThrow(() -> new RuntimeException("Financier not found"));

        patient.setTransplanted(patientUpdateDTO.getTransplanted());
        patient.setBloodType(patientUpdateDTO.getBloodType());
        patient.setCivilStatus(patientUpdateDTO.getCivilStatus());
        patient.setChildren(patientUpdateDTO.getChildren());
        patient.setCrossTransplant(patientUpdateDTO.getCrossTransplant());
        patient.setTutorFullName(patientUpdateDTO.getTutorFullName());
        patient.setTutorPhone(patientUpdateDTO.getTutorPhone());
        patient.setFinancier(financier);

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
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

    @Override
    public PatientResponseDTO addMedicalHistory(Long patientId, AddMedicalHistoryDTO addMedicalHistoryDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        List<String> medicalHistory = patient.getMedicalHistory();
        if (medicalHistory == null) {
            medicalHistory = new ArrayList<>();
        }
        medicalHistory.add(addMedicalHistoryDTO.getMedicalHistoryEntry());

        patient.setMedicalHistory(medicalHistory);
        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO updateMedicalHistory(Long patientId, MedicalHistoryUpdateDTO medicalHistoryUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        patient.setMedicalHistory(medicalHistoryUpdateDTO.getMedicalHistory());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    @Override
    public PatientResponseDTO addPathology(Long patientId, AddPathologyDTO pathologyAddDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        if (patient.getPathologies() == null) {
            patient.setPathologies(new ArrayList<>());
        }
        patient.getPathologies().add(pathologyAddDTO.getPathology());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }

    public PatientResponseDTO updatePathologies(Long patientId, PathologiesUpdateDTO pathologiesUpdateDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        patient.setPathologies(pathologiesUpdateDTO.getPathologies());

        patient = patientRepository.save(patient);
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

}
