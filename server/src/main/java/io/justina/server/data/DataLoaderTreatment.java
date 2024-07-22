package io.justina.server.data;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Treatment;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.MedicationRepository;
import io.justina.server.repositories.TreatmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoaderTreatment implements CommandLineRunner {

    @Autowired
    private TreatmentRepository treatmentRepository;

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private MedicationRepository medicationRepository;

    @Override
    public void run(String... args) throws Exception {
        if (treatmentRepository.count() == 0) {
            List<MedicalPrescription> medicalPrescriptions = medicalPrescriptionRepository.findAll();

            if (medicalPrescriptions.isEmpty()) {
                throw new ResourceNotFoundException("No medical prescriptions found");
            }

            List<MedicalPrescription> prescriptionsForTreatment1 = medicalPrescriptions.subList(0, 5);
            List<MedicalPrescription> prescriptionsForTreatment2 = medicalPrescriptions.subList(5, 10);
            List<MedicalPrescription> prescriptionsForTreatment3 = medicalPrescriptions.subList(10, 15);
            List<MedicalPrescription> prescriptionsForTreatment4 = medicalPrescriptions.subList(15, 20);
            List<MedicalPrescription> prescriptionsForTreatment5 = medicalPrescriptions.subList(20, 25);
            List<MedicalPrescription> prescriptionsForTreatment6 = medicalPrescriptions.subList(25, 30);
            List<MedicalPrescription> prescriptionsForTreatment7 = medicalPrescriptions.subList(30, 35);
            List<MedicalPrescription> prescriptionsForTreatment8 = medicalPrescriptions.subList(35, 40);
            List<MedicalPrescription> prescriptionsForTreatment9 = medicalPrescriptions.subList(40, 45);
            List<MedicalPrescription> prescriptionsForTreatment10 = medicalPrescriptions.subList(45, 50);

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
        }
    }

    private Treatment createTreatment(String treatmentName, String indications, List<MedicalPrescription> medicalPrescriptions) {
        Treatment treatment = Treatment.builder()
                .treatmentName(treatmentName)
                .indications(indications)
                .startDate(LocalDate.now())
                .medicalPrescriptions(new ArrayList<>())
                .build();

        for (MedicalPrescription prescription : medicalPrescriptions) {
            prescription.setTreatment(treatment);
            treatment.getMedicalPrescriptions().add(prescription);
        }

        return treatment;
    }

}

