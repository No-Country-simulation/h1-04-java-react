package io.justina.server.services.impl;


import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.User;
import io.justina.server.exceptions.DoctorNotFoundException;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

//    @Autowired
//    private UserRepository userRepository;


    @Override
    public DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) {
        User user = userRepository.findById(doctorRequestDTO.getUserId())
                .orElseThrow(() -> new DoctorNotFoundException("User not found"));

        Doctor doctor = new Doctor();
        doctor.setUser(user);
        doctor.setLicenceNumber(doctorRequestDTO.getLicenceNumber());
        doctor.setSpecialties(doctorRequestDTO.getSpecialties());
        doctor.setWorkdays(doctorRequestDTO.getWorkdays());
        doctor.setBusyDays(doctorRequestDTO.getBusyDays());

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

        doctor.setLicenceNumber(doctorRequestDTO.getLicenceNumber());
        doctor.setSpecialties(doctorRequestDTO.getSpecialties());
        doctor.setWorkdays(doctorRequestDTO.getWorkdays());
        doctor.setBusyDays(doctorRequestDTO.getBusyDays());

        doctor = doctorRepository.save(doctor);
        return new DoctorResponseDTO(doctor);
    }


    @Override
    public void deleteDoctor(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        doctorRepository.delete(doctor);
    }


    @Override
    public DoctorResponseDTO deactivateDoctor(Long id) {
        Doctor doctor = doctorRepository.findById(id)
                .orElseThrow(() -> new DoctorNotFoundException("Doctor not found"));
        User user = doctor.getUser();
        user.setActive(false);
        userRepository.save(user);
        return new DoctorResponseDTO(doctor);
    }


}
