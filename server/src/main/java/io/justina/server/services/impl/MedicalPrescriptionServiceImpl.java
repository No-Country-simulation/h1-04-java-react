package io.justina.server.services.impl;


import io.justina.server.dtos.request.MedicalPrescriptionRequestDTO;
import io.justina.server.dtos.response.MedicalPrescriptionResponseDTO;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import io.justina.server.entities.Treatment;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.MedicationRepository;
import io.justina.server.repositories.TreatmentRepository;
import io.justina.server.services.MedicalPrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MedicalPrescriptionServiceImpl implements MedicalPrescriptionService {

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Override
    public MedicalPrescriptionResponseDTO createMedicalPrescription(MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        MedicalPrescription medicalPrescription = convertToEntity(medicalPrescriptionRequestDTO);
        medicalPrescription.setStartDate(LocalDate.now());
        MedicalPrescription savedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
        return new MedicalPrescriptionResponseDTO(savedMedicalPrescription);
    }

    @Override
    @Transactional(readOnly = true)
    public MedicalPrescriptionResponseDTO getMedicalPrescriptionByMedicalPrescriptionId(Long medicalPrescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicalPrescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + medicalPrescriptionId));
        return new MedicalPrescriptionResponseDTO(medicalPrescription);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MedicalPrescriptionResponseDTO> getAllMedicalPrescriptions() {
        List<MedicalPrescription> medicalPrescriptions = medicalPrescriptionRepository.findAll();
        return medicalPrescriptions.stream()
                .map(MedicalPrescriptionResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public MedicalPrescriptionResponseDTO updateMedicalPrescription(Long medicalPrescriptionId, MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicalPrescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + medicalPrescriptionId));

        updateMedicalPrescriptionFields(medicalPrescription, medicalPrescriptionRequestDTO);
        medicalPrescription.setStartDate(LocalDate.now());

        MedicalPrescription updatedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
        return new MedicalPrescriptionResponseDTO(updatedMedicalPrescription);
    }

    @Override
    public void deleteMedicalPrescription(Long medicalPrescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicalPrescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + medicalPrescriptionId));
        medicalPrescriptionRepository.delete(medicalPrescription);
    }

    private MedicalPrescription convertToEntity(MedicalPrescriptionRequestDTO dto) {
        Medication medication = medicationRepository.findByMedicationId(dto.getMedicationId())
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        Treatment treatment = treatmentRepository.findByTreatmentId(dto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found"));

        return MedicalPrescription.builder()
                .doseSize(dto.getDoseSize())
                .doseFrequency(dto.getDoseFrequency())
                .indications(dto.getIndications())
                .startDate(dto.getStartDate())
                .medication(medication)
                .treatment(treatment)
                .build();
    }

    private void updateMedicalPrescriptionFields(MedicalPrescription medicalPrescription, MedicalPrescriptionRequestDTO dto) {
        Medication medication = medicationRepository.findByMedicationId(dto.getMedicationId())
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        Treatment treatment = treatmentRepository.findByTreatmentId(dto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found"));

        medicalPrescription.setDoseSize(dto.getDoseSize());
        medicalPrescription.setDoseFrequency(dto.getDoseFrequency());
        medicalPrescription.setIndications(dto.getIndications());
        medicalPrescription.setStartDate(dto.getStartDate());
        medicalPrescription.setMedication(medication);
        medicalPrescription.setTreatment(treatment);
    }

}
