package io.justina.server.dtos.request;

import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientUpdateDTO {

    @NotNull(message = "Transplanted status is required.")
    private Boolean transplanted;

    private BloodType bloodType;

    private CivilStatus civilStatus;

    @Min(value = 0, message = "Children count cannot be negative.")
    private Integer children;

    @Size(max = 255, message = "Cross transplant must not exceed 255 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s]+$", message = "Cross transplant should contain only letters, numbers, and spaces.")
    private String crossTransplant;

    @Size(max = 150, message = "Tutor full name must not exceed 150 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Tutor full name should only contain letters and spaces.")
    private String tutorFullName;

    @Size(max = 100, message = "Tutor phone must not exceed 100 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Tutor phone must contain only digits and optional leading +.")
    private String tutorPhone;

    @NotNull(message = "ID Financier is required.")
    private Long idFinancier;

}
