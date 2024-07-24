package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddMedicalHistoryDTO {

    @NotBlank(message = "Medical history entry cannot be empty.")
    @Size(max = 5000, message = "Medical history entry must not exceed 5000 characters.")
    private String medicalHistoryEntry;

}