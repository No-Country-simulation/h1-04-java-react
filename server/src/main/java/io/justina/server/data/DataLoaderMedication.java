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
@Order(4)
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
                    // Asociar cada laboratorio con al menos un medicamento
                    createMedication("Paracetamol", laboratories.get(0)),
                    createMedication("Ibuprofeno", laboratories.get(1)),
                    createMedication("Amoxicilina", laboratories.get(2)),
                    createMedication("Diclofenac", laboratories.get(3)),
                    createMedication("Omeprazol", laboratories.get(4)),
                    createMedication("Metformina", laboratories.get(5)),
                    createMedication("Losartán", laboratories.get(6)),
                    createMedication("Levotiroxina", laboratories.get(7)),
                    createMedication("Aspirina", laboratories.get(8)),
                    createMedication("Atorvastatina", laboratories.get(9)),
                    // Añadir más medicamentos distribuidos entre los laboratorios
                    createMedication("Simvastatina", laboratories.get(0)),
                    createMedication("Clopidogrel", laboratories.get(1)),
                    createMedication("Hidroclorotiazida", laboratories.get(2)),
                    createMedication("Ramipril", laboratories.get(3)),
                    createMedication("Amlodipina", laboratories.get(4)),
                    createMedication("Enalapril", laboratories.get(5)),
                    createMedication("Carvedilol", laboratories.get(6)),
                    createMedication("Bisoprolol", laboratories.get(7)),
                    createMedication("Metoprolol", laboratories.get(8)),
                    createMedication("Ezetimiba", laboratories.get(9)),
                    createMedication("Fenofibrato", laboratories.get(0)),
                    createMedication("Rosuvastatina", laboratories.get(1)),
                    createMedication("Lansoprazol", laboratories.get(2)),
                    createMedication("Pantoprazol", laboratories.get(3)),
                    createMedication("Esomeprazol", laboratories.get(4)),
                    createMedication("Loratadina", laboratories.get(5)),
                    createMedication("Cetirizina", laboratories.get(6)),
                    createMedication("Fexofenadina", laboratories.get(7)),
                    createMedication("Montelukast", laboratories.get(8)),
                    createMedication("Budesonida", laboratories.get(9)),
                    createMedication("Salbutamol", laboratories.get(0)),
                    createMedication("Formoterol", laboratories.get(1)),
                    createMedication("Fluticasona", laboratories.get(2)),
                    createMedication("Beclometasona", laboratories.get(3)),
                    createMedication("Ipratropio", laboratories.get(4)),
                    createMedication("Tiotropio", laboratories.get(5)),
                    createMedication("Prednisona", laboratories.get(6)),
                    createMedication("Dexametasona", laboratories.get(7)),
                    createMedication("Metilprednisolona", laboratories.get(8)),
                    createMedication("Hidrocortisona", laboratories.get(9)),
                    createMedication("Ranitidina", laboratories.get(0)),
                    createMedication("Famotidina", laboratories.get(1)),
                    createMedication("Cimetidina", laboratories.get(2)),
                    createMedication("Claritromicina", laboratories.get(3)),
                    createMedication("Azitromicina", laboratories.get(4)),
                    createMedication("Eritromicina", laboratories.get(5)),
                    createMedication("Levofloxacino", laboratories.get(6)),
                    createMedication("Ciprofloxacino", laboratories.get(7)),
                    createMedication("Norfloxacino", laboratories.get(8)),
                    createMedication("Ofloxacino", laboratories.get(9))
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

