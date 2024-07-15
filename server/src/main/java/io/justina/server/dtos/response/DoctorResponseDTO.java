package io.justina.server.dtos.response;

import io.justina.server.entities.Doctor;
import io.justina.server.enumerations.BusyDays;
import io.justina.server.enumerations.Specialty;
import io.justina.server.enumerations.Workday;
import lombok.*;
import java.time.LocalDate;
import java.util.Set;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DoctorResponseDTO {

    private Long doctorId;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private String documentType;
    private String documentNumber;
    private String street;
    private String number;
    private String district;
    private String city;
    private String province;
    private String postalCode;
    private String institutionName;
    private Set<Specialty> specialties;
    private String licenceNumber;
    private Set<Workday> workdays;
    private Set<BusyDays> busyDays;

    public DoctorResponseDTO(Doctor doctor) {
        this.doctorId = doctor.getDoctorId();
        this.firstName = doctor.getUser().getFirstName();
        this.lastName = doctor.getUser().getLastName();
        this.email = doctor.getUser().getEmail();
        this.birthDate = doctor.getUser().getBirthDate();
        this.phone = doctor.getUser().getPhone();
        this.documentType = doctor.getUser().getDocument().getDocumentType().name();
        this.documentNumber = doctor.getUser().getDocument().getDocumentNumber();
        this.street = doctor.getUser().getAddress().getStreet();
        this.number = doctor.getUser().getAddress().getNumber();
        this.district = doctor.getUser().getAddress().getDistrict();
        this.city = doctor.getUser().getAddress().getCity();
        this.province = doctor.getUser().getAddress().getProvince();
        this.postalCode = doctor.getUser().getAddress().getPostalCode();
        this.institutionName = doctor.getUser().getInstitutionName().name();
        this.specialties = doctor.getSpecialties();
        this.licenceNumber = doctor.getLicenceNumber();
        this.workdays = doctor.getWorkdays();
        this.busyDays = doctor.getBusyDays();
    }

}
