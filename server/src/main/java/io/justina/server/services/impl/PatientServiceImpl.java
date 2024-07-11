package io.justina.server.services.impl;


import io.justina.server.dtos.request.PatientRequestDTO;
import io.justina.server.dtos.response.PatientResponseDTO;
import io.justina.server.entities.Patient;
import io.justina.server.entities.User;
import io.justina.server.exceptions.PatientNotFoundException;
import io.justina.server.repositories.PatientRepository;
import io.justina.server.repositories.UserRepository;
import io.justina.server.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO) {
        User user = userRepository.findById(patientRequestDTO.getUserId())
                .orElseThrow(() -> new PatientNotFoundException("User not found"));

        Patient patient = new Patient();
        patient.setUser(user);
        patient.setMedicalHistory(patientRequestDTO.getMedicalHistory());
        patient.setPathologies(patientRequestDTO.getPathologies());
        patient.setTreatments(patientRequestDTO.getTreatments());
        patient.setMedications(patientRequestDTO.getMedications());
        patient.setHealthInsurance(patientRequestDTO.getHealthInsurance());
        patient.setAffiliateNumber(patientRequestDTO.getAffiliateNumber());
        patient.setTransplanted(patientRequestDTO.getTransplanted());
        patient.setBloodType(patientRequestDTO.getBloodType());
        patient.setCivilStatus(patientRequestDTO.getCivilStatus());
        patient.setChildren(patientRequestDTO.getChildren());
        patient.setCrossTransplant(patientRequestDTO.getCrossTransplant());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }


    @Override
    public PatientResponseDTO getPatientById(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        return new PatientResponseDTO(patient);
    }

    @Override
    public List<PatientResponseDTO> getAllPatients() {
        return patientRepository.findAll().stream()
                .map(PatientResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public PatientResponseDTO updatePatient(Long patientId, PatientRequestDTO patientRequestDTO) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        patient.setMedicalHistory(patientRequestDTO.getMedicalHistory());
        patient.setPathologies(patientRequestDTO.getPathologies());
        patient.setTreatments(patientRequestDTO.getTreatments());
        patient.setMedications(patientRequestDTO.getMedications());
        patient.setHealthInsurance(patientRequestDTO.getHealthInsurance());
        patient.setAffiliateNumber(patientRequestDTO.getAffiliateNumber());
        patient.setTransplanted(patientRequestDTO.getTransplanted());
        patient.setBloodType(patientRequestDTO.getBloodType());
        patient.setCivilStatus(patientRequestDTO.getCivilStatus());
        patient.setChildren(patientRequestDTO.getChildren());
        patient.setCrossTransplant(patientRequestDTO.getCrossTransplant());

        patient = patientRepository.save(patient);
        return new PatientResponseDTO(patient);
    }


    @Override
    public void deletePatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));
        patientRepository.delete(patient);
    }


    @Override
    public PatientResponseDTO deactivatePatient(Long patientId) {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new PatientNotFoundException("Patient not found"));

        User user = patient.getUser();
        user.setActive(false);
        userRepository.save(user);

        return new PatientResponseDTO(patient);
    }



}
