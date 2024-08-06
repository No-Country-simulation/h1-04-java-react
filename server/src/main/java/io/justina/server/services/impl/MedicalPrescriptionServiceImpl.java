package io.justina.server.services.impl;

import io.justina.server.dtos.request.MedicalPrescriptionRequestDTO;
import io.justina.server.dtos.response.MedicalPrescriptionResponseDTO;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.MedicationRepository;
import io.justina.server.services.MedicalPrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class MedicalPrescriptionServiceImpl implements MedicalPrescriptionService {

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private MedicationRepository medicationRepository;

    @Override
    public MedicalPrescriptionResponseDTO createMedicalPrescription(MedicalPrescriptionRequestDTO medicalPrescriptionRequestDTO) {
        Medication medication = medicationRepository.findById(medicalPrescriptionRequestDTO.getMedicationId())
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        MedicalPrescription medicalPrescription = convertToEntity(medicalPrescriptionRequestDTO);
        medicalPrescription.setMedication(medication);
        medicalPrescription.setActive(true);

        MedicalPrescription savedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
        return new MedicalPrescriptionResponseDTO(savedMedicalPrescription);
    }

    @Override
    public MedicalPrescriptionResponseDTO getMedicalPrescriptionId(Long medicalPrescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(medicalPrescriptionId)
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
            MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(medicalPrescriptionId)
                    .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + medicalPrescriptionId));

            Medication medication = medicationRepository.findById(medicalPrescriptionRequestDTO.getMedicationId())
                    .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

            updateMedicalPrescriptionFields(medicalPrescription, medicalPrescriptionRequestDTO);
            medicalPrescription.setMedication(medication);

            MedicalPrescription updatedMedicalPrescription = medicalPrescriptionRepository.save(medicalPrescription);
            return new MedicalPrescriptionResponseDTO(updatedMedicalPrescription);
    }

    @Override
    public void deactivateMedicalPrescription(Long medicalPrescriptionId) {
        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(medicalPrescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + medicalPrescriptionId));
        medicalPrescription.setActive(false);
        medicalPrescriptionRepository.save(medicalPrescription);
    }

    private MedicalPrescription convertToEntity(MedicalPrescriptionRequestDTO dto) {
        Medication medication = medicationRepository.findById(dto.getMedicationId())
                .orElseThrow(() -> new ResourceNotFoundException("Medication not found"));

        return MedicalPrescription.builder()
                .doseSize(dto.getDoseSize())
                .doseFrequency(dto.getDoseFrequency())
                .indications(dto.getIndications())
                .medication(medication)
                .build();
    }

    private void updateMedicalPrescriptionFields(MedicalPrescription medicalPrescription, MedicalPrescriptionRequestDTO dto) {
        medicalPrescription.setDoseSize(dto.getDoseSize());
        medicalPrescription.setDoseFrequency(dto.getDoseFrequency());
        medicalPrescription.setIndications(dto.getIndications());
    }

}
