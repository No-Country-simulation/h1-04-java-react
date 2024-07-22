package io.justina.server.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MasterDataLoader implements CommandLineRunner {

    @Autowired
    private DataLoaderRole dataLoaderRole;
    // Añadir más Data Loaders aquí

    @Override
    public void run(String... args) throws Exception {
        dataLoaderRole.run(args);
        // Ejecutar más Data Loaders aquí
    }

}
