package io.justina.server.services;


import io.justina.server.dtos.request.MedicalPrescriptionRequestDTO;
import io.justina.server.dtos.response.MedicalPrescriptionResponseDTO;

import java.util.List;

public interface MedicalPrescriptionService {

    MedicalPrescriptionResponseDTO createMedicalPrescription(MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO);
    MedicalPrescriptionResponseDTO updateMedicalPrescription(Long medicalPrescriptionId, MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO);
    void deleteMedicalPrescription(Long medicalPrescriptionId);
    MedicalPrescriptionResponseDTO getMedicalPrescriptionByMedicalPrescriptionId(Long medicalPrescriptionId);
    List<MedicalPrescriptionResponseDTO> getAllMedicalPrescriptions();

}
