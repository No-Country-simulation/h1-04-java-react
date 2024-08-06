package io.justina.server.services;

import io.justina.server.dtos.request.CreateTreatmentDTO;
import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

public interface TreatmentService {

    @Transactional
    TreatmentResponseDTO createTreatmentAndAssociateWithPatient(CreateTreatmentDTO createTreatmentDTO);
    TreatmentResponseDTO updateTreatment(Long treatmentId, TreatmentRequestDTO treatmentRequestDTO);
    void deactivateTreatment(Long treatmentId);
    TreatmentResponseDTO getTreatmentById(Long treatmentId);
    List<TreatmentResponseDTO> getAllTreatments();
    TreatmentResponseDTO addMedicalPrescriptionToTreatment(Long treatmentId, Long medicalPrescriptionId);

}