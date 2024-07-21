package io.justina.server.data;

import io.justina.server.entities.Laboratory;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.LaboratoryRepository;
import io.justina.server.repositories.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class DataLoaderMedication implements CommandLineRunner {

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public void run(String... args) throws Exception {
        if (medicationRepository.count() == 0) {
            Laboratory laboratory = laboratoryRepository.findById(1L)
                    .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found"));

            medicationRepository.saveAll(List.of(
                    createMedication("Paracetamol", laboratory),
                    createMedication("Ibuprofeno", laboratory),
                    createMedication("Amoxicilina", laboratory),
                    createMedication("Diclofenac", laboratory),
                    createMedication("Omeprazol", laboratory),
                    createMedication("Metformina", laboratory),
                    createMedication("Losartán", laboratory),
                    createMedication("Levotiroxina", laboratory),
                    createMedication("Aspirina", laboratory),
                    createMedication("Atorvastatina", laboratory)
            ));
        }
    }

    private Medication createMedication(String medicationName, Laboratory laboratory) {
        return Medication.builder()
                .medicationName(medicationName)
                .laboratory(laboratory)
                .active(true)
                .build();
    }

}

