package io.justina.server.services;


import io.justina.server.dtos.request.PatientRequestDTO;
import io.justina.server.dtos.response.PatientResponseDTO;


import java.util.List;

public interface PatientService {

    PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO);
    PatientResponseDTO getPatientById(Long patientId);
    List<PatientResponseDTO> getAllPatients();
    PatientResponseDTO updatePatient(Long patientId, PatientRequestDTO patientRequestDTO);
    void deletePatient(Long patientId);
    PatientResponseDTO deactivatePatient(Long patientId);


}
