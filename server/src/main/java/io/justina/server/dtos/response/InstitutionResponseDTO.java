package io.justina.server.dtos.response;

import io.justina.server.entities.Institution;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InstitutionResponseDTO {

    private Long id;
    private String name;
    private Boolean active;

    public InstitutionResponseDTO(Institution institution) {
        this.id = institution.getId();
        this.name = institution.getName();
        this.active = institution.getActive();
    }

}