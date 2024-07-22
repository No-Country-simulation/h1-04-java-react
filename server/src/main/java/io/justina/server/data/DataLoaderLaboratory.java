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
                    createLaboratory("Laboratorio Bagó", "30567891234", "+541143567890", "contacto@bago.com.ar", "Responsable Bagó", "Avenida Libertador", "1010", "Recoleta", "Buenos Aires", "Buenos Aires", "C1000"),
                    createLaboratory("Laboratorio Roemmers", "30567891235", "+541143567891", "contacto@roemmers.com.ar", "Responsable Roemmers", "Avenida Santa Fe", "2020", "Palermo", "Buenos Aires", "Buenos Aires", "C1425"),
                    createLaboratory("Laboratorio Raffo", "30567891236", "+541143567892", "contacto@raffo.com.ar", "Responsable Raffo", "Avenida Córdoba", "3030", "Villa Crespo", "Buenos Aires", "Buenos Aires", "C1414"),
                    createLaboratory("Laboratorio Elea", "30567891237", "+541143567893", "contacto@elea.com.ar", "Responsable Elea", "Avenida Corrientes", "4040", "Almagro", "Buenos Aires", "Buenos Aires", "C1195"),
                    createLaboratory("Laboratorio Casasco", "30567891238", "+541143567894", "contacto@casasco.com.ar", "Responsable Casasco", "Avenida Belgrano", "5050", "Monserrat", "Buenos Aires", "Buenos Aires", "C1092"),
                    createLaboratory("Laboratorio Bernabó", "30567891239", "+541143567895", "contacto@bernabo.com.ar", "Responsable Bernabó", "Avenida Rivadavia", "6060", "Caballito", "Buenos Aires", "Buenos Aires", "C1424"),
                    createLaboratory("Laboratorio Baliarda", "30567891240", "+541143567896", "contacto@baliarda.com.ar", "Responsable Baliarda", "Avenida San Juan", "7070", "Boedo", "Buenos Aires", "Buenos Aires", "C1234"),
                    createLaboratory("Laboratorio Richmond", "30567891241", "+541143567897", "contacto@richmond.com.ar", "Responsable Richmond", "Avenida La Plata", "8080", "Caballito", "Buenos Aires", "Buenos Aires", "C1405"),
                    createLaboratory("Laboratorio Jayor", "30567891242", "+541143567898", "contacto@jayor.com.ar", "Responsable Jayor", "Avenida Independencia", "9090", "San Cristóbal", "Buenos Aires", "Buenos Aires", "C1268"),
                    createLaboratory("Laboratorio Andrómaco", "30567891243", "+541143567899", "contacto@andromaco.com.ar", "Responsable Andrómaco", "Avenida Callao", "10101", "Balvanera", "Buenos Aires", "Buenos Aires", "C1055")
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
