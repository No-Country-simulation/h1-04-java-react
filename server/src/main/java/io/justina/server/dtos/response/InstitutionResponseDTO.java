package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Institution;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InstitutionResponseDTO {

    private Long id;
    private String name;
    private Address address;
    private String phone;
    private String email;
    private String contactPerson;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private Boolean active;

    public InstitutionResponseDTO(Institution institution) {
        this.id = institution.getId();
        this.name = institution.getName();
        this.address = institution.getAddress();
        this.phone = institution.getPhone();
        this.email = institution.getEmail();
        this.contactPerson = institution.getContactPerson();
        this.createdAt = institution.getCreatedAt();
        this.updatedAt = institution.getUpdatedAt();
        this.active = institution.getActive();
    }

}