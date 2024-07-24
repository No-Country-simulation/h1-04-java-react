package io.justina.server.services;

import io.justina.server.dtos.request.MedicationRequestDTO;
import io.justina.server.dtos.response.MedicationResponseDTO;
import java.util.List;

public interface MedicationService {

    MedicationResponseDTO createMedication(MedicationRequestDTO medicationRequestDTO);
    MedicationResponseDTO updateMedication(Long medicationId, MedicationRequestDTO medicationRequestDTO);
    void deactivateMedication(Long medicationId);
    MedicationResponseDTO getMedicationById(Long medicationId);
    List<MedicationResponseDTO> getAllMedications();

}
