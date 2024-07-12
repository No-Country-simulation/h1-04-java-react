package io.justina.server.dtos.request;


import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientRequestDTO {

    @NotBlank(message = "Health insurance is required.")
    @Size(max = 100, message = "Health insurance must not exceed 100 characters.")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Health insurance should contain only letters and spaces.")
    private String healthInsurance;

    @NotBlank(message = "Affiliate number is required.")
    @Size(max = 100, message = "Affiliate number must not exceed 100 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Affiliate number should contain only letters and numbers.")
    private String affiliateNumber;

    @NotNull(message = "Transplanted status is required.")
    private Boolean transplanted;

    @NotNull(message = "Blood type is required.")
    private BloodType bloodType;

    @NotNull(message = "Civil status is required.")
    private CivilStatus civilStatus;

    @NotNull(message = "Children count is required.")
    @Min(value = 0, message = "Children count cannot be negative.")
    private Integer children;

    @Size(max = 255, message = "Cross transplant must not exceed 255 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s]+$", message = "Cross transplant should contain only letters, numbers, and spaces.")
    private String crossTransplant;

    @Size(max = 5000, message = "Medical history must not exceed 5000 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.]+$", message = "Medical history should contain only letters, numbers, spaces, commas, and periods.")
    private List<String> medicalHistory;

    @Size(max = 5000, message = "Pathologies must not exceed 5000 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.]+$", message = "Pathologies should contain only letters, numbers, spaces, commas, and periods.")
    private List<String> pathologies;

    @Size(max = 5000, message = "Treatments must not exceed 5000 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.]+$", message = "Treatments should contain only letters, numbers, spaces, commas, and periods.")
    private List<String> treatments;

    @Size(max = 5000, message = "Medications must not exceed 5000 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.]+$", message = "Medications should contain only letters, numbers, spaces, commas, and periods.")
    private List<String> medications;

}
