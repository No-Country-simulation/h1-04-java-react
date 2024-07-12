package io.justina.server.services.impl;


import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.entities.Address;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Document;
import io.justina.server.entities.User;
import io.justina.server.enumerations.DocumentType;
import io.justina.server.exceptions.DoctorNotFoundException;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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


    @Override
    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) {

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
                .password(passwordEncoder.encode(doctorRequestDTO.getPassword()))
                .firstName(doctorRequestDTO.getFirstName())
                .lastName(doctorRequestDTO.getLastName())
                .birthDate(doctorRequestDTO.getBirthDate())
                .phone(doctorRequestDTO.getPhone())
                .institutionName(doctorRequestDTO.getInstitutionName())
                //.role(doctorRequestDTO.getRole())
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
                .busyDays(doctorRequestDTO.getBusyDays())
                .build();

        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO("Doctor created successfully with ID: " + doctor.getDoctorId());


    }


    @Override
    public DoctorResponseDTO getDoctorById(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        return new DoctorResponseDTO("Doctor found: " + doctor.getUser().getFirstName() + " " + doctor.getUser().getLastName());
    }


    @Override
    public List<DoctorResponseDTO> getAllDoctors() {
        List<Doctor> doctors = doctorRepository.findAll();
        if (doctors.isEmpty()) {
            return List.of(new DoctorResponseDTO("No doctors found"));
        } else {
            return doctors.stream()
                    .map(doctor -> new DoctorResponseDTO("Doctor listed: " + doctor.getUser().getFirstName() + " " + doctor.getUser().getLastName()))
                    .collect(Collectors.toList());
        }
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
        user.setInstitutionName(doctorRequestDTO.getInstitutionName());
       // user.setRole(doctorRequestDTO.getRole());

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
        doctor.setBusyDays(doctorRequestDTO.getBusyDays());

        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO("Doctor updated successfully with ID: " + doctor.getDoctorId());

    }


    @Override
    public ResponseEntity<DoctorResponseDTO> deleteDoctor(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        doctorRepository.delete(doctor);
        return new ResponseEntity<>(new DoctorResponseDTO("Doctor deleted successfully."), HttpStatus.OK);
    }


    @Override
    public DoctorResponseDTO deactivateDoctor(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        User user = doctor.getUser();
        user.setActive(false);
        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO("Doctor deactivated successfully with ID: " + doctor.getDoctorId());
    }

}
