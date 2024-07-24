package io.justina.server.services.impl;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.request.DoctorUpdateRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.dtos.response.UpdateDoctorResponseDTO;
import io.justina.server.entities.*;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.enumerations.Specialty;
import io.justina.server.exceptions.DoctorNotFoundException;
import io.justina.server.exceptions.FinancierNotFoundException;
import io.justina.server.exceptions.RegistrationException;
import io.justina.server.repositories.*;
import io.justina.server.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import javax.management.relation.RoleNotFoundException;
import java.util.EnumSet;
import java.util.List;
import java.util.Set;
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

    @Autowired
    private InstitutionRepository institutionRepository;

    private final String DEFAULT_PASSWORD = "12345Aa*";

    @Override
    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) throws RoleNotFoundException {

        Role doctorRole = roleRepository.findByName("DOCTOR")
                .orElseThrow(() -> new RoleNotFoundException("Role DOCTOR not found"));

        Financier financier = financierRepository.findById(doctorRequestDTO.getIdFinancier())
                .orElseThrow(() -> new FinancierNotFoundException("Financier not found"));

        Institution noCountryInstitution = institutionRepository.findByName("NO_COUNTRY")
                .orElseThrow(() -> new RegistrationException("Institution NO_COUNTRY not found"));

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
                .institution(noCountryInstitution)
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
    public UpdateDoctorResponseDTO updateDoctor(Long id, DoctorUpdateRequestDTO doctorUpdateRequestDTO) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));

        // Actualizar campos solo si están presentes en el DTO
        if (doctorUpdateRequestDTO.getSpecialties() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getSpecialties(), Specialty.class);
            doctor.setSpecialties(doctorUpdateRequestDTO.getSpecialties());
        }

        if (doctorUpdateRequestDTO.getLicenceNumber() != null) {
            doctor.setLicenceNumber(doctorUpdateRequestDTO.getLicenceNumber());
        }

        if (doctorUpdateRequestDTO.getWorkdays() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getWorkdays(), Day.class);
            doctor.setWorkdays(doctorUpdateRequestDTO.getWorkdays());
        }

        if (doctorUpdateRequestDTO.getSchedule() != null) {
            validateEnumOptions(doctorUpdateRequestDTO.getSchedule(), AvailableHours.class);
            doctor.setSchedule(doctorUpdateRequestDTO.getSchedule());
        }

        // Guardar cambios
        doctor = doctorRepository.save(doctor);
        return new UpdateDoctorResponseDTO(doctor);
    }

    private <T extends Enum<T>> void validateEnumOptions(Set<T> values, Class<T> enumClass) {
        for (T value : values) {
            if (!EnumSet.allOf(enumClass).contains(value)) {
                throw new IllegalArgumentException("Invalid value for enum " + enumClass.getSimpleName());
            }
        }
    }

    @Override
    public void deactivateDoctor(Long doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        User user = doctor.getUser();
        user.setIsActive(false);
        doctor.setUser(user);
        doctorRepository.save(doctor);
    }

}
