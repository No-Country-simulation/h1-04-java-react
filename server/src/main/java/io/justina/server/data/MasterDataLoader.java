package io.justina.server.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MasterDataLoader implements CommandLineRunner {

    @Autowired
    private DataLoaderRole dataLoaderRole;

    @Autowired
    private DataLoaderInstitution dataLoaderInstitution;

    @Autowired
    private DataLoaderLaboratory dataLoaderLaboratory;

    @Autowired
    private DataLoaderMedication dataLoaderMedication;

    @Autowired
    private DataLoaderMedicalPrescription dataLoaderMedicalPrescription;

    @Autowired
    private DataLoaderTreatment dataLoaderTreatment;

    @Autowired
    private DataLoaderFinancier dataLoaderFinancier;

    @Autowired
    private DataLoaderAdmin dataLoaderAdmin;

    @Autowired
    private DataLoaderDoctor dataLoaderDoctor;

    @Autowired
    private DataLoaderPatient dataLoaderPatient;

    @Override
    public void run(String... args) throws Exception {
        dataLoaderRole.run(args);
        dataLoaderInstitution.run(args);
        dataLoaderLaboratory.run(args);
        dataLoaderMedication.run(args);
        dataLoaderMedicalPrescription.run(args);
        dataLoaderTreatment.run(args);
        dataLoaderFinancier.run(args);
        dataLoaderAdmin.run(args);
        dataLoaderDoctor.run(args);
        dataLoaderPatient.run(args);

    }

}
