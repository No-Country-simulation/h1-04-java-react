package io.justina.server.data;

import io.justina.server.entities.Institution;
import io.justina.server.repositories.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(2)
public class DataLoaderInstitution implements CommandLineRunner {

    @Autowired
    private InstitutionRepository institutionRepository;

    @Override
    public void run(String... args) throws Exception {
        if (institutionRepository.count() == 0) {
            Institution noCountry = new Institution();
            noCountry.setName("NO_COUNTRY");
            noCountry.setActive(true);
            institutionRepository.save(noCountry);

            Institution justinaIo = new Institution();
            justinaIo.setName("JUSTINA_IO");
            justinaIo.setActive(true);
            institutionRepository.save(justinaIo);

            Institution multiplicateX7 = new Institution();
            multiplicateX7.setName("MULTIPLICATEX7");
            multiplicateX7.setActive(true);
            institutionRepository.save(multiplicateX7);
        }
    }

}

