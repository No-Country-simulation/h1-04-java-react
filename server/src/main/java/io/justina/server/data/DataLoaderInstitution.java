package io.justina.server.data;

import io.justina.server.entities.Institution;
import io.justina.server.repositories.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoaderInstitution implements CommandLineRunner {

    @Autowired
    private InstitutionRepository institutionRepository;

    @Override
    public void run(String... args) throws Exception {
        if (institutionRepository.count() == 0) {
            Institution noCountry = new Institution();
            noCountry.setName("NO_COUNTRY");
            institutionRepository.save(noCountry);

            Institution justinaIo = new Institution();
            justinaIo.setName("JUSTINA_IO");
            institutionRepository.save(justinaIo);

            Institution multiplicateX7 = new Institution();
            multiplicateX7.setName("MULTIPLICATEX7");
            institutionRepository.save(multiplicateX7);
        }
    }

}

