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
@Order(6)
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

            int size = medicalPrescriptions.size();
            System.out.println("Total medical prescriptions found: " + size);

            List<MedicalPrescription> prescriptionsForTreatment1 = medicalPrescriptions.subList(0, Math.min(5, size));
            List<MedicalPrescription> prescriptionsForTreatment2 = medicalPrescriptions.subList(Math.min(5, size), Math.min(10, size));
            List<MedicalPrescription> prescriptionsForTreatment3 = medicalPrescriptions.subList(Math.min(10, size), Math.min(15, size));
            List<MedicalPrescription> prescriptionsForTreatment4 = medicalPrescriptions.subList(Math.min(15, size), Math.min(20, size));
            List<MedicalPrescription> prescriptionsForTreatment5 = medicalPrescriptions.subList(Math.min(20, size), Math.min(25, size));
            List<MedicalPrescription> prescriptionsForTreatment6 = medicalPrescriptions.subList(Math.min(25, size), Math.min(30, size));
            List<MedicalPrescription> prescriptionsForTreatment7 = medicalPrescriptions.subList(Math.min(30, size), Math.min(35, size));
            List<MedicalPrescription> prescriptionsForTreatment8 = medicalPrescriptions.subList(Math.min(35, size), Math.min(40, size));
            List<MedicalPrescription> prescriptionsForTreatment9 = medicalPrescriptions.subList(Math.min(40, size), Math.min(45, size));
            List<MedicalPrescription> prescriptionsForTreatment10 = medicalPrescriptions.subList(Math.min(45, size), Math.min(50, size));

            System.out.println("Creating treatments with the following prescriptions:");
            System.out.println("Treatment 1: " + prescriptionsForTreatment1);
            System.out.println("Treatment 2: " + prescriptionsForTreatment2);
            System.out.println("Treatment 3: " + prescriptionsForTreatment3);
            System.out.println("Treatment 4: " + prescriptionsForTreatment4);
            System.out.println("Treatment 5: " + prescriptionsForTreatment5);
            System.out.println("Treatment 6: " + prescriptionsForTreatment6);
            System.out.println("Treatment 7: " + prescriptionsForTreatment7);
            System.out.println("Treatment 8: " + prescriptionsForTreatment8);
            System.out.println("Treatment 9: " + prescriptionsForTreatment9);
            System.out.println("Treatment 10: " + prescriptionsForTreatment10);

            treatmentRepository.saveAll(List.of(
                    createTreatment("Tratamiento para la hipertensión", "Control y reducción de la presión arterial", prescriptionsForTreatment1),
                    createTreatment("Tratamiento para la diabetes tipo 2", "Control de glucosa en sangre", prescriptionsForTreatment2),
                    createTreatment("Tratamiento para la tiroides", "Regulación de la función tiroidea", prescriptionsForTreatment3),
                    createTreatment("Tratamiento para el dolor crónico", "Manejo del dolor a largo plazo", prescriptionsForTreatment4),
                    createTreatment("Tratamiento para el colesterol alto", "Reducción de los niveles de colesterol", prescriptionsForTreatment5),
                    createTreatment("Tratamiento para el reflujo gástrico", "Alivio del reflujo ácido", prescriptionsForTreatment6),
                    createTreatment("Tratamiento para infecciones bacterianas", "Erradicación de infecciones bacterianas", prescriptionsForTreatment7),
                    createTreatment("Tratamiento para la depresión", "Manejo de síntomas depresivos", prescriptionsForTreatment8),
                    createTreatment("Tratamiento para la osteoporosis", "Fortalecimiento de los huesos", prescriptionsForTreatment9),
                    createTreatment("Tratamiento para el asma", "Control y prevención de ataques asmáticos", prescriptionsForTreatment10)
            ));
            System.out.println("Treatments loaded successfully.");
        }
    }

    private Treatment createTreatment(String treatmentName, String indications, List<MedicalPrescription> medicalPrescriptions) {
        Treatment treatment = Treatment.builder()
                .treatmentName(treatmentName)
                .indications(indications)
                .startDate(LocalDate.now())
                .medicalPrescriptions(new ArrayList<>(medicalPrescriptions))
                .build();

        return treatment;
    }

}