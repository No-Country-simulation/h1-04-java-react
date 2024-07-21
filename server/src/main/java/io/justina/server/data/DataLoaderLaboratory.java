package io.justina.server.data;

import io.justina.server.entities.Address;
import io.justina.server.entities.Laboratory;
import io.justina.server.repositories.LaboratoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class DataLoaderLaboratory implements CommandLineRunner {

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public void run(String... args) throws Exception {
        if (laboratoryRepository.count() == 0) {
            laboratoryRepository.saveAll(List.of(
                    createLaboratory("Lab Uno", "20304050601", "+541112345678", "lab1@example.com", "Responsable Uno", "Calle Falsa", "123", "Barrio Norte", "Ciudad A", "Provincia A", "5000"),
                    createLaboratory("Lab Dos", "20304050602", "+541112345679", "lab2@example.com", "Responsable Dos", "Calle Verdadera", "456", "Barrio Sur", "Ciudad B", "Provincia B", "5001"),
                    createLaboratory("Lab Tres", "20304050603", "+541112345680", "lab3@example.com", "Responsable Tres", "Avenida Siempreviva", "789", "Barrio Este", "Ciudad C", "Provincia C", "5002"),
                    createLaboratory("Lab Cuatro", "20304050604", "+541112345681", "lab4@example.com", "Responsable Cuatro", "Calle Principal", "101", "Barrio Oeste", "Ciudad D", "Provincia D", "5003"),
                    createLaboratory("Lab Cinco", "20304050605", "+541112345682", "lab5@example.com", "Responsable Cinco", "Calle Secundaria", "202", "Barrio Central", "Ciudad E", "Provincia E", "5004"),
                    createLaboratory("Lab Seis", "20304050606", "+541112345683", "lab6@example.com", "Responsable Seis", "Calle Tercera", "303", "Barrio Alto", "Ciudad F", "Provincia F", "5005"),
                    createLaboratory("Lab Siete", "20304050607", "+541112345684", "lab7@example.com", "Responsable Siete", "Calle Cuarta", "404", "Barrio Bajo", "Ciudad G", "Provincia G", "5006"),
                    createLaboratory("Lab Ocho", "20304050608", "+541112345685", "lab8@example.com", "Responsable Ocho", "Calle Quinta", "505", "Barrio Nuevo", "Ciudad H", "Provincia H", "5007"),
                    createLaboratory("Lab Nueve", "20304050609", "+541112345686", "lab9@example.com", "Responsable Nueve", "Calle Sexta", "606", "Barrio Viejo", "Ciudad I", "Provincia I", "5008"),
                    createLaboratory("Lab Diez", "20304050610", "+541112345687", "lab10@example.com", "Responsable Diez", "Calle Séptima", "707", "Barrio Industrial", "Ciudad J", "Provincia J", "5009")
            ));
        }
    }

    private Laboratory createLaboratory(String name, String cuit, String phone, String email, String responsible, String street, String number, String district, String city, String province, String postalCode) {
        Address address = Address.builder()
                .street(street)
                .number(number)
                .district(district)
                .city(city)
                .province(province)
                .postalCode(postalCode)
                .build();

        return Laboratory.builder()
                .name(name)
                .cuit(cuit)
                .phone(phone)
                .email(email)
                .responsible(responsible)
                .active(true)
                .address(address)
                .build();
    }

}

