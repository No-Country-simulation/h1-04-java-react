package io.justina.server.data;

import io.justina.server.entities.MedicalPrescription;
import io.justina.server.entities.Medication;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.MedicalPrescriptionRepository;
import io.justina.server.repositories.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@Order(5)
public class DataLoaderMedicalPrescription implements CommandLineRunner {

    @Autowired
    private MedicalPrescriptionRepository medicalPrescriptionRepository;

    @Autowired
    private MedicationRepository medicationRepository;

    @Override
    public void run(String... args) throws Exception {
        if (medicalPrescriptionRepository.count() == 0) {
            List<Medication> medications = medicationRepository.findAll();

            if (medications.isEmpty()) {
                throw new ResourceNotFoundException("No medications found");
            }

            System.out.println("Total medications found: " + medications.size());

            List<MedicalPrescription> prescriptions = List.of(
                    createMedicalPrescription("500mg", "Dos veces al día", "Tomar con comida", medications.get(0)),
                    createMedicalPrescription("200mg", "Una vez al día", "Tomar en ayunas", medications.get(1)),
                    createMedicalPrescription("250mg", "Tres veces al día", "Tomar con agua", medications.get(2)),
                    createMedicalPrescription("100mg", "Una vez al día", "Tomar antes de dormir", medications.get(3)),
                    createMedicalPrescription("50mg", "Dos veces al día", "Tomar con jugo", medications.get(4)),
                    createMedicalPrescription("10mg", "Una vez al día", "Tomar por la mañana", medications.get(5)),
                    createMedicalPrescription("5mg", "Dos veces al día", "Tomar con leche", medications.get(6)),
                    createMedicalPrescription("1g", "Una vez al día", "Tomar después de las comidas", medications.get(7)),
                    createMedicalPrescription("75mg", "Dos veces al día", "Tomar con té", medications.get(8)),
                    createMedicalPrescription("150mg", "Una vez al día", "Tomar con café", medications.get(9)),
                    createMedicalPrescription("300mg", "Tres veces al día", "Tomar con agua", medications.get(10)),
                    createMedicalPrescription("400mg", "Una vez al día", "Tomar antes de dormir", medications.get(11)),
                    createMedicalPrescription("600mg", "Dos veces al día", "Tomar después de las comidas", medications.get(12)),
                    createMedicalPrescription("800mg", "Una vez al día", "Tomar en ayunas", medications.get(13)),
                    createMedicalPrescription("1.2g", "Dos veces al día", "Tomar con comida", medications.get(14)),
                    createMedicalPrescription("2g", "Tres veces al día", "Tomar con agua", medications.get(15)),
                    createMedicalPrescription("300mg", "Una vez al día", "Tomar con jugo", medications.get(16)),
                    createMedicalPrescription("100mg", "Dos veces al día", "Tomar con leche", medications.get(17)),
                    createMedicalPrescription("250mg", "Una vez al día", "Tomar por la mañana", medications.get(18)),
                    createMedicalPrescription("350mg", "Tres veces al día", "Tomar con agua", medications.get(19)),
                    createMedicalPrescription("500mg", "Dos veces al día", "Tomar con comida", medications.get(20)),
                    createMedicalPrescription("600mg", "Una vez al día", "Tomar con jugo", medications.get(21)),
                    createMedicalPrescription("750mg", "Dos veces al día", "Tomar con café", medications.get(22)),
                    createMedicalPrescription("400mg", "Una vez al día", "Tomar con té", medications.get(23)),
                    createMedicalPrescription("250mg", "Dos veces al día", "Tomar con agua", medications.get(24)),
                    createMedicalPrescription("100mg", "Tres veces al día", "Tomar con comida", medications.get(25)),
                    createMedicalPrescription("200mg", "Una vez al día", "Tomar con leche", medications.get(26)),
                    createMedicalPrescription("300mg", "Dos veces al día", "Tomar en ayunas", medications.get(27)),
                    createMedicalPrescription("400mg", "Una vez al día", "Tomar con té", medications.get(28)),
                    createMedicalPrescription("150mg", "Tres veces al día", "Tomar con agua", medications.get(29)),
                    createMedicalPrescription("250mg", "Dos veces al día", "Tomar con café", medications.get(30)),
                    createMedicalPrescription("500mg", "Una vez al día", "Tomar con jugo", medications.get(31)),
                    createMedicalPrescription("600mg", "Dos veces al día", "Tomar con comida", medications.get(32)),
                    createMedicalPrescription("800mg", "Una vez al día", "Tomar en ayunas", medications.get(33)),
                    createMedicalPrescription("1g", "Tres veces al día", "Tomar con agua", medications.get(34)),
                    createMedicalPrescription("1.2g", "Dos veces al día", "Tomar con jugo", medications.get(35)),
                    createMedicalPrescription("2g", "Una vez al día", "Tomar con comida", medications.get(36)),
                    createMedicalPrescription("300mg", "Dos veces al día", "Tomar con leche", medications.get(37)),
                    createMedicalPrescription("400mg", "Tres veces al día", "Tomar con café", medications.get(38)),
                    createMedicalPrescription("500mg", "Una vez al día", "Tomar con té", medications.get(39)),
                    createMedicalPrescription("600mg", "Dos veces al día", "Tomar con agua", medications.get(40)),
                    createMedicalPrescription("800mg", "Una vez al día", "Tomar con comida", medications.get(41)),
                    createMedicalPrescription("1g", "Tres veces al día", "Tomar con jugo", medications.get(42)),
                    createMedicalPrescription("1.2g", "Dos veces al día", "Tomar con café", medications.get(43)),
                    createMedicalPrescription("2g", "Una vez al día", "Tomar con leche", medications.get(44)),
                    createMedicalPrescription("300mg", "Dos veces al día", "Tomar con té", medications.get(45)),
                    createMedicalPrescription("400mg", "Tres veces al día", "Tomar con comida", medications.get(46)),
                    createMedicalPrescription("500mg", "Una vez al día", "Tomar en ayunas", medications.get(47)),
                    createMedicalPrescription("600mg", "Dos veces al día", "Tomar con jugo", medications.get(48)),
                    createMedicalPrescription("800mg", "Una vez al día", "Tomar con leche", medications.get(49))
            );

            medicalPrescriptionRepository.saveAll(prescriptions);
            System.out.println("Medical prescriptions loaded successfully.");
        }
    }

    private MedicalPrescription createMedicalPrescription(String doseSize, String doseFrequency, String indications, Medication medication) {
        return MedicalPrescription.builder()
                .doseSize(doseSize)
                .doseFrequency(doseFrequency)
                .indications(indications)
                .medication(medication)
                .build();
    }

}

