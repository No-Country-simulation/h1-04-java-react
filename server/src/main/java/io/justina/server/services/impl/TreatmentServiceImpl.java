package io.justina.server.services.impl;

import io.justina.server.dtos.request.AddMedicalPrescriptionToTreatmentDTO;
import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Treatment;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.TreatmentRepository;
import io.justina.server.services.TreatmentService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TreatmentServiceImpl implements TreatmentService {

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Override
    public TreatmentResponseDTO createTreatment(TreatmentRequestDTO treatmentRequestDTO) {
        Treatment treatment = convertToEntity(treatmentRequestDTO);
        Treatment savedTreatment = treatmentRepository.save(treatment);
        return new TreatmentResponseDTO(savedTreatment);
    }

    @Override
    @Transactional(readOnly = true)
    public TreatmentResponseDTO getTreatmentById(Long treatmentId) {
        Treatment treatment = treatmentRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + treatmentId));
        return new TreatmentResponseDTO(treatment);
    }

    @Override
    @Transactional(readOnly = true)
    public List<TreatmentResponseDTO> getAllTreatments() {
        List<Treatment> treatments = treatmentRepository.findAll();
        return treatments.stream()
                .map(TreatmentResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public TreatmentResponseDTO updateTreatment(Long treatmentId, TreatmentRequestDTO treatmentRequestDTO) {
        Treatment treatment = treatmentRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + treatmentId));

        updateTreatmentFields(treatment, treatmentRequestDTO);
        Treatment updatedTreatment = treatmentRepository.save(treatment);
        return new TreatmentResponseDTO(updatedTreatment);
    }

    @Override
    public void deleteTreatment(Long treatmentId) {
        Treatment treatment = treatmentRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + treatmentId));
        treatmentRepository.delete(treatment);
    }

    @Override
    public void addMedicalPrescriptionToTreatment(AddMedicalPrescriptionToTreatmentDTO dto) {
        Treatment treatment = treatmentRepository.findById(dto.getTreatmentId())
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + dto.getTreatmentId()));

        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(dto.getMedicalPrescriptionId())
                .orElseThrow(() -> new ResourceNotFoundException("Medical Prescription not found with id: " + dto.getMedicalPrescriptionId()));

        medicalPrescription.setTreatment(treatment);
        medicalPrescriptionRepository.save(medicalPrescription);
    }

    private Treatment convertToEntity(TreatmentRequestDTO dto) {
        return Treatment.builder()
                .treatmentName(dto.getTreatmentName())
                .indications(dto.getIndications())
                .build();
    }

    private void updateTreatmentFields(Treatment treatment, TreatmentRequestDTO dto) {
        treatment.setTreatmentName(dto.getTreatmentName());
        treatment.setIndications(dto.getIndications());
    }

}
