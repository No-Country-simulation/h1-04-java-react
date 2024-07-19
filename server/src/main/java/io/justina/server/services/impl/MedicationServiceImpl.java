package io.justina.server.services.impl;

import io.justina.server.dtos.request.MedicationRequestDTO;
import io.justina.server.dtos.response.MedicationResponseDTO;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicationRepository;
import io.justina.server.services.MedicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

        Medication medication = Medication.builder()
                .medicalPrescription(medicalPrescription)
                .laboratory(laboratory)
                .medicationName(medicationRequestDTO.getMedicationName())
                .active(medicationRequestDTO.getActive())
                .createdAt(medicationRequestDTO.getCreatedAt())
                .updatedAt(medicationRequestDTO.getUpdatedAt())
                .build();

        medication = medicationRepository.save(medication);
        return new MedicationResponseDTO(medication);
    }

    @Override
    public MedicationResponseDTO updateMedication(Long medicationId, MedicationRequestDTO medicationRequestDTO) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findByMedicalPrescriptionId(medicationRequestDTO.getMedicalPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical prescription not found"));

        Laboratory laboratory = laboratoryRepository.findByLaboratoryId(medicationRequestDTO.getLaboratoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found"));

        medication.setMedicalPrescription(medicalPrescription);
        medication.setLaboratory(laboratory);
        medication.setMedicationName(medicationRequestDTO.getMedicationName());
        medication.setActive(medicationRequestDTO.getActive());
        medication.setUpdatedAt(medicationRequestDTO.getUpdatedAt());

        medication = medicationRepository.save(medication);
        return new MedicationResponseDTO(medication);
    }

    @Override
    public void deleteMedication(Long medicationId) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));
        medicationRepository.delete(medication);
    }

    @Override
    public MedicationResponseDTO getMedicationById(Long medicationId) {
        Medication medication = medicationRepository.findByMedicationId(medicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));
        return new MedicationResponseDTO(medication);
    }

    @Override
    public List<MedicationResponseDTO> getAllMedications() {
        List<Medication> medications = medicationRepository.findAll();
        return medications.stream().map(MedicationResponseDTO::new).collect(Collectors.toList());
    }

}
