package io.justina.server.services;

import io.justina.server.dtos.request.*;
import io.justina.server.dtos.response.PatientResponseDTO;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

public interface PatientService {

    PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO);
    PatientResponseDTO getPatientById(Long patientId);
    List<PatientResponseDTO> getAllPatients();
    List<String> getPatientFiles(Long patientId);
    PatientResponseDTO updatePatient(Long patientId, PatientUpdateDTO patientUpdateDTO);
    PatientResponseDTO uploadPatientFile(Long patientId, MultipartFile file);
    PatientResponseDTO addMedicalHistory(Long patientId, AddMedicalHistoryDTO addMedicalHistoryDTO);
    PatientResponseDTO updateMedicalHistory(Long patientId, MedicalHistoryUpdateDTO medicalHistoryUpdateDTO);
    PatientResponseDTO addPathology(Long patientId, AddPathologyDTO pathologyAddDTO);
    PatientResponseDTO updatePathologies(Long patientId, PathologiesUpdateDTO pathologiesUpdateDTO);
    void deactivatePatient(Long patientId);

}
