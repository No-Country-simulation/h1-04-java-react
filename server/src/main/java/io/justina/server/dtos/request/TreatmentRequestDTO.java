package io.justina.server.dtos.request;


import jakarta.validation.constraints.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TreatmentRequestDTO {

    @NotBlank(message = "Treatment name is required.")
    @Size(max = 100, message = "Treatment name must not exceed 100 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Treatment name should only contain letters and spaces.")
    private String treatmentName;

    @NotBlank(message = "Indications are required.")
    @Size(max = 5000, message = "Indications must not exceed 5000 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Indications should only contain letters, spaces, commas, periods, and hyphens.")
    private String indications;

    @NotNull(message = "Start date is required.")
    private LocalDate startDate;

    private LocalDate endDate;

    @NotNull(message = "Medical prescription ID is required.")
    private Long medicalPrescriptionId;

    @NotNull(message = "Patient ID is required.")
    private Long patientId;

    @NotBlank(message = "Patient first name is required.")
    @Size(max = 50, message = "Patient first name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Patient first name should only contain letters and spaces.")
    private String patientFirstName;

    @NotBlank(message = "Patient last name is required.")
    @Size(max = 50, message = "Patient last name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Patient last name should only contain letters and spaces.")
    private String patientLastName;

    @NotBlank(message = "Patient document type is required.")
    @Size(max = 20, message = "Patient document type must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Patient document number should contain only letters and numbers.")
    private String patientDocumentType;

    @NotBlank(message = "Patient document number is required.")
    @Size(max = 20, message = "Patient document number must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Patient document number should contain only letters and numbers.")
    private String patientDocumentNumber;

    @NotEmpty(message = "Patient pathologies are required.")
    @Size(max = 5000, message = "Patient pathologies must not exceed 5000 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Patient pathologies should only contain letters, spaces, commas, periods, and hyphens.")
    private List<String> patientPathologies;

    @NotBlank(message = "Dosage size is required.")
    @Size(max = 100, message = "Dosage size must not exceed 100 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Dosage size should only contain letters, spaces, commas, periods, and hyphens.")
    private String dosageSize;

    @NotBlank(message = "Dosage frequency is required.")
    @Size(max = 100, message = "Dosage frequency must not exceed 100 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Dosage frequency should only contain letters, spaces, commas, periods, and hyphens.")
    private String dosageFrequency;

    @NotBlank(message = "Dosage indications are required.")
    @Size(max = 5000, message = "Dosage indications must not exceed 5000 characters.")
    @Pattern(regexp = "^[\\p{L}\\s,.-]+$", message = "Dosage indications should only contain letters, spaces, commas, periods, and hyphens.")
    private String dosageIndications;

}
