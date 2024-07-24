package io.justina.server.services.impl;

import io.justina.server.dtos.request.AddMedicalPrescriptionToTreatmentDTO;
import io.justina.server.dtos.request.CreateTreatmentDTO;
import io.justina.server.dtos.request.TreatmentRequestDTO;
import io.justina.server.dtos.response.TreatmentResponseDTO;
import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Patient;
import io.justina.server.entities.Treatment;
import io.justina.server.exceptions.MedicalPrescriptionAlreadyAssignedException;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.PatientRepository;
import io.justina.server.repositories.TreatmentRepository;
import io.justina.server.services.TreatmentService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TreatmentServiceImpl implements TreatmentService {

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Transactional
    @Override
    public TreatmentResponseDTO createTreatmentAndAssociateWithPatient(CreateTreatmentDTO createTreatmentDTO) {
        // Crear el tratamiento
        Treatment treatment = Treatment.builder()
                .treatmentName(createTreatmentDTO.getTreatmentName())
                .indications(createTreatmentDTO.getIndications())
                .startDate(LocalDate.now())
                .active(true)
                .build();

        // Guardar el tratamiento (esto también asegura que el tratamiento tiene un ID)
        Treatment savedTreatment = treatmentRepository.save(treatment);

        // Encontrar al paciente
        Patient patient = patientRepository.findById(createTreatmentDTO.getPatientId())
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        // Actualizar la lista de tratamientos del paciente
        if (patient.getTreatments() == null) {
            patient.setTreatments(new ArrayList<>());
        }
        patient.getTreatments().add(savedTreatment);

        // Establecer el paciente en el tratamiento
        savedTreatment.setPatient(patient);

        // Guardar el paciente con el tratamiento asociado
        patientRepository.save(patient);

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
    public void deactivateTreatment(Long treatmentId) {
        Treatment treatment = treatmentRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + treatmentId));
        treatment.setActive(false);
        treatmentRepository.save(treatment);
    }

    @Override
    public TreatmentResponseDTO addMedicalPrescriptionToTreatment(Long treatmentId, Long medicalPrescriptionId) {
        Treatment treatment = treatmentRepository.findById(treatmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Treatment not found with id: " + treatmentId));

        MedicalPrescription medicalPrescription = medicalPrescriptionRepository.findById(medicalPrescriptionId)
                .orElseThrow(() -> new ResourceNotFoundException("Medical prescription not found with id: " + medicalPrescriptionId));

        boolean isAssigned = medicalPrescriptionRepository.isMedicalPrescriptionAssignedToAnyTreatment(medicalPrescriptionId);
        if (isAssigned) {
            throw new MedicalPrescriptionAlreadyAssignedException("Medical prescription already assigned to a treatment.");
        }

        treatment.getMedicalPrescriptions().add(medicalPrescription);
        Treatment updatedTreatment = treatmentRepository.save(treatment);

        return new TreatmentResponseDTO(updatedTreatment);
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
