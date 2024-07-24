package io.justina.server.services;

import io.justina.server.dtos.request.*;
import io.justina.server.dtos.response.PatientResponseDTO;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

public interface PatientService {

    PatientResponseDTO createPatient(PatientRequestDTO patientRequestDTO);
    PatientResponseDTO getPatientById(Long patientId);
    List<PatientResponseDTO> getAllPatients();
    PatientResponseDTO updatePatient(Long patientId, PatientUpdateDTO patientUpdateDTO);
    PatientResponseDTO uploadPatientFile(Long patientId, MultipartFile file);
    PatientResponseDTO updateMedicalHistory(Long patientId, MedicalHistoryUpdateDTO medicalHistoryUpdateDTO);
    PatientResponseDTO updatePathologies(Long patientId, PathologiesUpdateDTO pathologiesUpdateDTO);
    PatientResponseDTO addTreatmentToPatient(Long patientId, TreatmentRequestDTO treatmentRequestDTO);
    void deactivatePatient(Long patientId);

}
