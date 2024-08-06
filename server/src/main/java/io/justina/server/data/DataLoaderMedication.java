package io.justina.server.data;

import io.justina.server.entities.Laboratory;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.LaboratoryRepository;
import io.justina.server.repositories.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@Order(5)
public class DataLoaderMedication implements CommandLineRunner {

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public void run(String... args) throws Exception {
        if (medicationRepository.count() == 0) {
            List<Laboratory> laboratories = laboratoryRepository.findAll();

            if (laboratories.isEmpty()) {
                throw new ResourceNotFoundException("No laboratories found");
            }

            medicationRepository.saveAll(List.of(
                    createMedication("Paracetamol", laboratories.get(0)),
                    createMedication("Ibuprofeno", laboratories.get(0)),
                    createMedication("Amoxicilina", laboratories.get(0)),
                    createMedication("Diclofenac", laboratories.get(1)),
                    createMedication("Omeprazol", laboratories.get(1)),
                    createMedication("Metformina", laboratories.get(1)),
                    createMedication("Losartán", laboratories.get(2)),
                    createMedication("Levotiroxina", laboratories.get(2)),
                    createMedication("Aspirina", laboratories.get(2)),
                    createMedication("Atorvastatina", laboratories.get(3)),
                    createMedication("Simvastatina", laboratories.get(3)),
                    createMedication("Clopidogrel", laboratories.get(3)),
                    createMedication("Hidroclorotiazida", laboratories.get(4)),
                    createMedication("Ramipril", laboratories.get(4)),
                    createMedication("Amlodipina", laboratories.get(4)),
                    createMedication("Enalapril", laboratories.get(5)),
                    createMedication("Carvedilol", laboratories.get(5)),
                    createMedication("Bisoprolol", laboratories.get(5)),
                    createMedication("Metoprolol", laboratories.get(6)),
                    createMedication("Ezetimiba", laboratories.get(6)),
                    createMedication("Fenofibrato", laboratories.get(6)),
                    createMedication("Rosuvastatina", laboratories.get(7)),
                    createMedication("Lansoprazol", laboratories.get(7)),
                    createMedication("Pantoprazol", laboratories.get(7)),
                    createMedication("Esomeprazol", laboratories.get(8)),
                    createMedication("Loratadina", laboratories.get(8)),
                    createMedication("Cetirizina", laboratories.get(8)),
                    createMedication("Fexofenadina", laboratories.get(9)),
                    createMedication("Montelukast", laboratories.get(9)),
                    createMedication("Budesonida", laboratories.get(9))
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

