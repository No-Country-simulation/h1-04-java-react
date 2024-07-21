package io.justina.server.data;

import io.justina.server.entities.Role;
import io.justina.server.repositories.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataLoaderRole implements CommandLineRunner {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.count() == 0) {
            roleRepository.save(new Role(null, "DOCTOR"));
            roleRepository.save(new Role(null, "PATIENT"));
            roleRepository.save(new Role(null, "ADMIN"));
            roleRepository.save(new Role(null, "LABORATORY"));
            roleRepository.save(new Role(null, "FINANCIER"));
            roleRepository.save(new Role(null, "PHARMACY"));
            roleRepository.save(new Role(null, "PARENT_GUARDIAN"));
            roleRepository.save(new Role(null, "HEALTH_CENTER"));
        }
    }

}
