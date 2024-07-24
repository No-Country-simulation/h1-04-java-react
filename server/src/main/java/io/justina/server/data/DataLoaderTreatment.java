package io.justina.server.data;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Treatment;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.TreatmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
@Order(7)
public class DataLoaderTreatment implements CommandLineRunner {

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        if (treatmentRepository.count() == 0) {
            List<MedicalPrescription> medicalPrescriptions = medicalPrescriptionRepository.findAll();

            if (medicalPrescriptions.isEmpty()) {
                throw new ResourceNotFoundException("No medical prescriptions found");
            }

            // Asegúrate de tener al menos 30 prescripciones para evitar errores
            if (medicalPrescriptions.size() < 30) {
                throw new IllegalStateException("Se requieren al menos 30 prescripciones médicas");
            }

            // Crear tratamientos con prescripciones secuenciales
            treatmentRepository.saveAll(List.of(
                    createTreatment("Tratamiento para la hipertensión", "Control y reducción de la presión arterial", medicalPrescriptions.subList(0, 3)),
                    createTreatment("Tratamiento para la diabetes tipo 2", "Control de glucosa en sangre", medicalPrescriptions.subList(3, 6)),
                    createTreatment("Tratamiento para la tiroides", "Regulación de la función tiroidea", medicalPrescriptions.subList(6, 9)),
                    createTreatment("Tratamiento para el dolor crónico", "Manejo del dolor a largo plazo", medicalPrescriptions.subList(9, 12)),
                    createTreatment("Tratamiento para el colesterol alto", "Reducción de los niveles de colesterol", medicalPrescriptions.subList(12, 15)),
                    createTreatment("Tratamiento para el reflujo gástrico", "Alivio del reflujo ácido", medicalPrescriptions.subList(15, 18)),
                    createTreatment("Tratamiento para infecciones bacterianas", "Erradicación de infecciones bacterianas", medicalPrescriptions.subList(18, 21)),
                    createTreatment("Tratamiento para la depresión", "Manejo de síntomas depresivos", medicalPrescriptions.subList(21, 24)),
                    createTreatment("Tratamiento para la osteoporosis", "Fortalecimiento de los huesos", medicalPrescriptions.subList(24, 27)),
                    createTreatment("Tratamiento para el asma", "Control y prevención de ataques asmáticos", medicalPrescriptions.subList(27, 30))
            ));
        }
    }

    private Treatment createTreatment(String treatmentName, String indications, List<MedicalPrescription> medicalPrescriptions) {
        Treatment treatment = Treatment.builder()
                .treatmentName(treatmentName)
                .indications(indications)
                .startDate(LocalDate.now())
                .active(true)
                .medicalPrescriptions(new ArrayList<>(medicalPrescriptions))
                .build();

        return treatment;
    }

}