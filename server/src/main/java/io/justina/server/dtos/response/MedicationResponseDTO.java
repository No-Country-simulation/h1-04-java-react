package io.justina.server.dtos.response;

import io.justina.server.entities.Laboratory;
import io.justina.server.entities.Medication;
import lombok.*;

@Setter
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicationResponseDTO {

    private Long medicationId;
    private String medicationName;
    private Laboratory laboratory;
    private Boolean active;

    public MedicationResponseDTO(Medication medication) {
        this.medicationId = medication.getId();
        this.laboratory = medication.getLaboratory();
        this.medicationName = medication.getMedicationName();
        this.active = medication.getActive();
    }

}
