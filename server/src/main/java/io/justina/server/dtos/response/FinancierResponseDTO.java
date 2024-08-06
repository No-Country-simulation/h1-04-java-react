package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Financier;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FinancierResponseDTO {

    private Long id;
    private String name;
    private String cuit;
    private Address address;
    private String phone;
    private String email;
    private String contactPerson;
    private Boolean isActive;

    public FinancierResponseDTO(Financier financier) {
        this.id = financier.getId();;
        this.name = financier.getName();
        this.cuit = financier.getCuit();
        this.address = financier.getAddress();
        this.phone = financier.getPhone();
        this.email = financier.getEmail();
        this.contactPerson = financier.getContactPerson();
        this.isActive = financier.getIsActive();
    }

}
