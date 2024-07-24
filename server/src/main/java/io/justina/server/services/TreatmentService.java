package io.justina.server.services;

import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import java.util.List;

public interface TreatmentService {

    TreatmentResponseDTO createTreatment(TreatmentRequestDTO treatmentRequestDTO);
    TreatmentResponseDTO updateTreatment(Long treatmentId, TreatmentRequestDTO treatmentRequestDTO);
    void deactivateTreatment(Long treatmentId);
    TreatmentResponseDTO getTreatmentById(Long treatmentId);
    List<TreatmentResponseDTO> getAllTreatments();
    TreatmentResponseDTO addMedicalPrescriptionToTreatment(Long treatmentId, Long medicalPrescriptionId);

}