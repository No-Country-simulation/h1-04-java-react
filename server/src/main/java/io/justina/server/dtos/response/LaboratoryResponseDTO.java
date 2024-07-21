package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Laboratory;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LaboratoryResponseDTO {

    private Long id;
    private String name;
    private String cuit;
    private Address address;
    private String phone;
    private String email;
    private String responsible;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private Boolean active;

    public LaboratoryResponseDTO(Laboratory laboratory) {
        this.id = laboratory.getId();
        this.name = laboratory.getName();
        this.cuit = laboratory.getCuit();
        this.address = laboratory.getAddress();
        this.phone = laboratory.getPhone();
        this.email = laboratory.getEmail();
        this.responsible = laboratory.getResponsible();
        this.createdAt = laboratory.getCreatedAt();
        this.updatedAt = laboratory.getUpdatedAt();
        this.active = laboratory.getActive();
    }

}
