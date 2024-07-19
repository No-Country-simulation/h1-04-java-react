package io.justina.server.services.impl;

import io.justina.server.dtos.request.MedicationRequestDTO;
import io.justina.server.dtos.response.MedicationResponseDTO;
import io.justina.server.entities.Laboratory;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.LaboratoryRepository;
import io.justina.server.repositories.MedicationRepository;
import io.justina.server.services.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


@Service
@Transactional
public class MedicationServiceImpl implements MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public MedicationResponseDTO createMedication(MedicationRequestDTO medicationRequestDTO) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicationRequestDTO.getMedicalPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical prescription not found"));

        Laboratory laboratory = laboratoryRepository.findByLaboratoryId(medicationRequestDTO.getLaboratoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found"));

        Medication medication = convertToEntity(medicationRequestDTO);
        medication.setMedicalPrescription(medicalPrescription);
        medication.setLaboratory(laboratory);
        medication.setCreatedAt(LocalDateTime.now());
        medication.setUpdatedAt(LocalDateTime.now());

        Medication savedMedication = medicationRepository.save(medication);
        return new MedicationResponseDTO(savedMedication);
    }

    @Override
    @Transactional(readOnly = true)
    public MedicationResponseDTO getMedicationById(Long medicationId) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));
        return new MedicationResponseDTO(medication);
    }

    @Override
    @Transactional(readOnly = true)
    public List<MedicationResponseDTO> getAllMedications() {
        List<Medication> medications = medicationRepository.findAll();
        return medications.stream()
                .map(MedicationResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public MedicationResponseDTO updateMedication(Long medicationId, MedicationRequestDTO medicationRequestDTO) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicationRequestDTO.getMedicalPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical prescription not found"));

        Laboratory laboratory = laboratoryRepository.findByLaboratoryId(medicationRequestDTO.getLaboratoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found"));

        updateMedicationFields(medication, medicationRequestDTO);
        medication.setMedicalPrescription(medicalPrescription);
        medication.setLaboratory(laboratory);
        medication.setUpdatedAt(LocalDateTime.now());

        Medication updatedMedication = medicationRepository.save(medication);
        return new MedicationResponseDTO(updatedMedication);
    }

    @Override
    public void deleteMedication(Long medicationId) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));
        medicationRepository.delete(medication);
    }

    private Medication convertToEntity(MedicationRequestDTO dto) {
        return Medication.builder()
                .medicationName(dto.getMedicationName())
                .active(dto.getActive())
                .createdAt(dto.getCreatedAt())
                .updatedAt(dto.getUpdatedAt())
                .build();
    }

    private void updateMedicationFields(Medication medication, MedicationRequestDTO dto) {
        medication.setMedicationName(dto.getMedicationName());
        medication.setActive(dto.getActive());
        medication.setUpdatedAt(dto.getUpdatedAt());
    }

}
