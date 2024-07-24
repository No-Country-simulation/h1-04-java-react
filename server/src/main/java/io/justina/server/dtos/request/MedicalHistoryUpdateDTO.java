package io.justina.server.dtos.request;

import jakarta.validation.constraints.Size;
import lombok.*;
import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MedicalHistoryUpdateDTO {

    @Size(max = 5000, message = "Medical history must not exceed 5000 characters.")
    private List<String> medicalHistory;

}
