package io.justina.server.data;

import io.justina.server.entities.Address;
import io.justina.server.entities.Financier;
import io.justina.server.repositories.AddressRepository;
import io.justina.server.repositories.FinancierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
import java.util.List;

@Component
@Order(3)
public class DataLoaderFinancier implements CommandLineRunner {

    @Autowired
    private FinancierRepository financierRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public void run(String... args) throws Exception {
        if (financierRepository.count() == 0) {
            List<Financier> financiers = List.of(
                    createFinancier("OSDE", "20304050601", "+541143169000", "osde@osde.com.ar", "Carlos Pérez", "Av. Córdoba 5000", "5000", "Palermo", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1000"),
                    createFinancier("Medicus", "20304050602", "+541149598000", "medicus@medicus.com.ar", "Ana López", "Av. Libertador 5500", "5500", "Belgrano", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1426"),
                    createFinancier("Swiss Medical", "20304050603", "+541148908100", "swissmedical@swissmedical.com.ar", "José Gómez", "Av. Santa Fe 3500", "3500", "Recoleta", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1425"),
                    createFinancier("Galeno", "20304050604", "+541143200666", "galeno@galeno.com.ar", "Laura Fernández", "Av. Callao 1500", "1500", "San Nicolás", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1022"),
                    createFinancier("Sancor Salud", "20304050605", "+541152702222", "sancor@sanorsalud.com.ar", "Miguel Torres", "Av. de Mayo 1200", "1200", "Monserrat", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1084"),
                    createFinancier("Federada Salud", "20304050606", "+541149572000", "federada@federadasalud.com.ar", "Martín Díaz", "Av. Corrientes 500", "500", "CABA", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1043"),
                    createFinancier("Unión Personal", "20304050607", "+541143812121", "unionpersonal@unionpersonal.com.ar", "Sofía Ruiz", "Av. Pueyrredón 1900", "1900", "Balvanera", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1234"),
                    createFinancier("IOMA", "20304050608", "+541142307000", "ioma@ioma.gba.gov.ar", "Marcelo Fernández", "Av. 7 1000", "1000", "La Plata", "Buenos Aires", "Provincia de Buenos Aires", "1900"),
                    createFinancier("PAMI", "20304050613", "+541149827600", "pami@pami.org.ar", "Silvia Fernández", "Av. Rivadavia 10000", "10000", "Liniers", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1408"),
                    createFinancier("Hospital Italiano", "20304050617", "+541149589000", "hospitalitaliano@hospitalitaliano.org.ar", "Claudia López", "Av. Pueyrredón 1500", "1500", "Almagro", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1181")
            );

            financierRepository.saveAll(financiers);
        }
    }

    private Financier createFinancier(String name, String cuit, String phone, String email, String contactPerson, String street, String number, String district, String city, String province, String postalCode) {
        Address address = Address.builder()
                .street(street)
                .number(number)
                .district(district)
                .city(city)
                .province(province)
                .postalCode(postalCode)
                .build();

        return Financier.builder()
                .name(name)
                .cuit(cuit)
                .phone(phone)
                .email(email)
                .contactPerson(contactPerson)
                .isActive(true)
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .address(address)
                .build();
    }

}

