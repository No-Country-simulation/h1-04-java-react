package io.justina.server.services.impl;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.exceptions.DoctorNotFoundException;
import io.justina.server.exceptions.FinancierNotFoundException;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.management.relation.RoleNotFoundException;
import java.util.EnumSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

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
    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) throws RoleNotFoundException {

        Role doctorRole = roleRepository.findByName("DOCTOR")
                .orElseThrow(() -> new RoleNotFoundException("Role DOCTOR not found"));

        Financier financier = financierRepository.findById(doctorRequestDTO.getIdFinancier())
                .orElseThrow(() -> new FinancierNotFoundException("Financier not found"));

        Document document = Document.builder()
                .documentType(DocumentType.valueOf(doctorRequestDTO.getDocumentType()))
                .documentNumber(doctorRequestDTO.getDocumentNumber())
                .build();

        Address address = Address.builder()
                .street(doctorRequestDTO.getStreet())
                .number(doctorRequestDTO.getNumber())
                .district(doctorRequestDTO.getDistrict())
                .city(doctorRequestDTO.getCity())
                .province(doctorRequestDTO.getProvince())
                .postalCode(doctorRequestDTO.getPostalCode())
                .build();

        User user = User.builder()
                .email(doctorRequestDTO.getEmail())
                .password(passwordEncoder.encode(DEFAULT_PASSWORD))
                .firstName(doctorRequestDTO.getFirstName())
                .lastName(doctorRequestDTO.getLastName())
                .birthDate(doctorRequestDTO.getBirthDate())
                .phone(doctorRequestDTO.getPhone())
                .role(doctorRole)
                .isActive(true)
                .document(document)
                .address(address)
                .build();

        user = userRepository.save(user);

        Doctor doctor = Doctor.builder()
                .user(user)
                .licenceNumber(doctorRequestDTO.getLicenceNumber())
                .specialties(doctorRequestDTO.getSpecialties())
                .workdays(doctorRequestDTO.getWorkdays())
                .schedule(EnumSet.allOf(AvailableHours.class))
                .financier(financier)
                .build();

        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO(doctor);
    }

    @Override
    public DoctorResponseDTO getDoctorById(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        return new DoctorResponseDTO(doctor);
    }

    @Override
    public List<DoctorResponseDTO> getAllDoctors() {
        return doctorRepository.findAll().stream()
                .map(DoctorResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public DoctorResponseDTO updateDoctor(Long id, DoctorRequestDTO doctorRequestDTO) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));

        User user = doctor.getUser();
        user.setFirstName(doctorRequestDTO.getFirstName());
        user.setLastName(doctorRequestDTO.getLastName());
        user.setEmail(doctorRequestDTO.getEmail());
        user.setBirthDate(doctorRequestDTO.getBirthDate());
        user.setPhone(doctorRequestDTO.getPhone());

        Document document = user.getDocument();
        document.setDocumentType(DocumentType.valueOf(doctorRequestDTO.getDocumentType()));
        document.setDocumentNumber(doctorRequestDTO.getDocumentNumber());

        Address address = user.getAddress();
        address.setStreet(doctorRequestDTO.getStreet());
        address.setNumber(doctorRequestDTO.getNumber());
        address.setDistrict(doctorRequestDTO.getDistrict());
        address.setCity(doctorRequestDTO.getCity());
        address.setProvince(doctorRequestDTO.getProvince());
        address.setPostalCode(doctorRequestDTO.getPostalCode());

        user.setDocument(document);
        user.setAddress(address);

        doctor.setLicenceNumber(doctorRequestDTO.getLicenceNumber());
        doctor.setSpecialties(doctorRequestDTO.getSpecialties());
        doctor.setWorkdays(doctorRequestDTO.getWorkdays());
        doctor.setSchedule(EnumSet.allOf(AvailableHours.class));

        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO(doctor);
    }

    @Transactional
    @Override
    public DoctorResponseDTO deleteDoctor(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        doctorRepository.delete(doctor);
        return new DoctorResponseDTO(doctor);
    }

    @Override
    public void deactivateDoctor(Long doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        User user = doctor.getUser();
        user.setIsActive(false);
        doctorRepository.save(doctor);
    }

}
