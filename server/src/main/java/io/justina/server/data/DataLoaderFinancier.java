//package io.justina.server.data;
//
//import io.justina.server.entities.Address;
//import io.justina.server.entities.Financier;
//import io.justina.server.repositories.AddressRepository;
//import io.justina.server.repositories.FinancierRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.core.annotation.Order;
//import org.springframework.stereotype.Component;
//import java.time.LocalDate;
//import java.util.List;
//
//@Component
//@Order(2)
//public class DataLoaderFinancier implements CommandLineRunner {
//
//    @Autowired
//    private FinancierRepository financierRepository;
//
//    @Autowired
//    private AddressRepository addressRepository;
//
//    @Override
//    public void run(String... args) throws Exception {
//        if (financierRepository.count() == 0) {
//            List<Financier> financiers = List.of(
//                    createFinancier("OSDE", "20304050601", "+54 11 4316-9000", "osde@osde.com.ar", "Carlos Pérez", "Av. Córdoba 5000", "5000", "Palermo", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1000"),
//                    createFinancier("Medicus", "20304050602", "+54 11 4959-8000", "medicus@medicus.com.ar", "Ana López", "Av. Libertador 5500", "5500", "Belgrano", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1426"),
//                    createFinancier("Swiss Medical", "20304050603", "+54 11 4890-8100", "swissmedical@swissmedical.com.ar", "José Gómez", "Av. Santa Fe 3500", "3500", "Recoleta", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1425"),
//                    createFinancier("Galeno", "20304050604", "+54 11 4320-0666", "galeno@galeno.com.ar", "Laura Fernández", "Av. Callao 1500", "1500", "San Nicolás", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1022"),
//                    createFinancier("Sancor Salud", "20304050605", "+54 11 5270-2222", "sancor@sanorsalud.com.ar", "Miguel Torres", "Av. de Mayo 1200", "1200", "Monserrat", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1084"),
//                    createFinancier("Federada Salud", "20304050606", "+54 11 4957-2000", "federada@federadasalud.com.ar", "Martín Díaz", "Av. Corrientes 500", "500", "CABA", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1043"),
//                    createFinancier("Unión Personal", "20304050607", "+54 11 4381-2121", "unionpersonal@unionpersonal.com.ar", "Sofía Ruiz", "Av. Pueyrredón 1900", "1900", "Balvanera", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1234"),
//                    createFinancier("IOMA", "20304050608", "+54 11 4230-7000", "ioma@ioma.gba.gov.ar", "Marcelo Fernández", "Av. 7 1000", "1000", "La Plata", "Buenos Aires", "Provincia de Buenos Aires", "1900"),
//                    createFinancier("Osdebin", "20304050609", "+54 11 4316-9001", "osdebin@osdebin.com.ar", "Verónica Álvarez", "Av. Belgrano 800", "800", "San Cristóbal", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1280"),
//                    createFinancier("Emergencias", "20304050610", "+54 11 4772-9500", "emergencias@emergencias.com.ar", "Ricardo Castro", "Av. 9 de Julio 500", "500", "San Nicolás", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1043"),
//                    createFinancier("Osplad", "20304050611", "+54 11 4309-0055", "osplad@osplad.org.ar", "Patricia Martínez", "Av. San Juan 800", "800", "Boedo", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1246"),
//                    createFinancier("Osprera", "20304050612", "+54 11 4827-2727", "osprera@osprera.org.ar", "Gabriel López", "Av. San Martín 2200", "2200", "Villa del Parque", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1418"),
//                    createFinancier("PAMI", "20304050613", "+54 11 4982-7600", "pami@pami.org.ar", "Silvia Fernández", "Av. Rivadavia 10000", "10000", "Liniers", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1408"),
//                    createFinancier("Osseg", "20304050614", "+54 11 4328-1600", "osseg@osseg.org.ar", "Carlos Sánchez", "Av. Belgrano 1900", "1900", "Monserrat", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1084"),
//                    createFinancier("Osde", "20304050615", "+54 11 4254-5800", "osde@osde.com.ar", "Lucía Castro", "Av. Corrientes 4500", "4500", "Villa Urquiza", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1407"),
//                    createFinancier("Osde", "20304050616", "+54 11 4342-6000", "osde@osde.com.ar", "Ignacio García", "Av. Santa Fe 3600", "3600", "Villa Devoto", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1416"),
//                    createFinancier("Hospital Italiano", "20304050617", "+54 11 4958-9000", "hospitalitaliano@hospitalitaliano.org.ar", "Claudia López", "Av. Pueyrredón 1500", "1500", "Almagro", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1181"),
//                    createFinancier("Osplad", "20304050618", "+54 11 4927-6000", "osplad@osplad.org.ar", "Sergio García", "Av. San Juan 2500", "2500", "Flores", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1406"),
//                    createFinancier("AMSR", "20304050619", "+54 11 4301-5400", "amsr@amsr.org.ar", "Gabriela González", "Av. Belgrano 800", "800", "San Cristóbal", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1280"),
//                    createFinancier("Osdeg", "20304050620", "+54 11 4777-5400", "osdeg@osdeg.com.ar", "Fernando Torres", "Av. Pueyrredón 1200", "1200", "Balvanera", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1234"),
//                    createFinancier("Ospes", "20304050621", "+54 11 4344-9000", "ospes@ospes.com.ar", "Natalia Fernández", "Av. Corrientes 800", "800", "San Cristóbal", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1043"),
//                    createFinancier("Osmed", "20304050622", "+54 11 4722-2000", "osmed@osmed.com.ar", "Ricardo García", "Av. Rivadavia 3400", "3400", "Villa del Parque", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1418"),
//                    createFinancier("Ospe", "20304050623", "+54 11 4982-4000", "ospe@ospe.org.ar", "Laura Rodríguez", "Av. de Mayo 800", "800", "Monserrat", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1084"),
//                    createFinancier("Osplad", "20304050624", "+54 11 4311-3000", "osplad@osplad.org.ar", "Martín Fernández", "Av. Belgrano 3500", "3500", "CABA", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1426"),
//                    createFinancier("Ospel", "20304050625", "+54 11 4780-9000", "ospel@ospel.com.ar", "María Gómez", "Av. Santa Fe 2000", "2000", "Recoleta", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1425"),
//                    createFinancier("Osme", "20304050626", "+54 11 4303-5500", "osme@osme.com.ar", "Javier López", "Av. Corrientes 600", "600", "CABA", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1043"),
//                    createFinancier("Osseg", "20304050627", "+54 11 4960-5000", "osseg@osseg.org.ar", "Verónica Ruiz", "Av. Callao 200", "200", "San Nicolás", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1022"),
//                    createFinancier("Ospol", "20304050628", "+54 11 4927-8000", "ospol@ospol.com.ar", "Fernando Fernández", "Av. San Martín 1300", "1300", "Villa Devoto", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1416"),
//                    createFinancier("Osp", "20304050629", "+54 11 4320-9000", "osp@osp.com.ar", "Claudia Sánchez", "Av. Rivadavia 4000", "4000", "Boedo", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1246"),
//                    createFinancier("Oste", "20304050630", "+54 11 4342-6000", "oste@oste.com.ar", "Carlos Álvarez", "Av. San Juan 2500", "2500", "Flores", "Buenos Aires", "Ciudad Autónoma de Buenos Aires", "C1406")
//            );
//            financierRepository.saveAll(financiers);
//        }
//    }
//
//    private Financier createFinancier(String name, String cuit, String phone, String email, String contactPerson, String street, String number, String district, String city, String province, String postalCode) {
//        Address address = Address.builder()
//                .street(street)
//                .number(number)
//                .district(district)
//                .city(city)
//                .province(province)
//                .postalCode(postalCode)
//                .build();
//
//        return Financier.builder()
//                .name(name)
//                .cuit(cuit)
//                .phone(phone)
//                .email(email)
//                .contactPerson(contactPerson)
//                .isActive(true)
//                .createdAt(LocalDate.now())
//                .updatedAt(LocalDate.now())
//                .address(address)
//                .build();
//    }
//
//}
//
