package io.justina.server.services;

import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;

import java.util.List;

public interface TreatmentService {

    TreatmentResponseDTO createTreatment(TreatmentRequestDTO treatmentRequestDTO);
    TreatmentResponseDTO updateTreatment(Long treatmentId, TreatmentRequestDTO treatmentRequestDTO);
    void deleteTreatment(Long treatmentId);
    TreatmentResponseDTO getTreatmentByTreatmentId(Long treatmentId);
    List<TreatmentResponseDTO> getAllTreatments();
    List<TreatmentResponseDTO> getTreatmentsByPatientId(Long patientId);
}