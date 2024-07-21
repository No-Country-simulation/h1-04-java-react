package io.justina.server.dtos.request;


import io.justina.server.entities.Treatment;
import io.justina.server.enumerations.BloodType;
import io.justina.server.enumerations.CivilStatus;
import io.justina.server.enumerations.Institution;
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
public class PatientRequestDTO {

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
    private List<String> medicalHistory;

    @Size(max = 5000, message = "Pathologies must not exceed 5000 characters.")
    private List<String> pathologies;

    @Size(max = 150, message = "Tutor full name must not exceed 150 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Tutor full name should only contain letters and spaces.")
    private String tutorFullName;

    @Size(max = 100, message = "Tutor phone must not exceed 100 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Tutor phone must contain only digits and optional leading +.")
    private String tutorPhone;

    @NotNull(message = "File is required.")
    private byte[] file;

    @NotNull(message = "Treatments are required.")
    private List<Treatment> treatments;

//    @NotNull(message = "Financier is required.")
//    private Financier financier;

    @NotBlank(message = "Name is required.")
    @Size(max = 50, message = "Name must not exceed 50 characters.")
    private String financierName;

    @NotBlank(message = "CUIT is required.")
    @Size(max = 11, message = "CUIT must not exceed 11 characters.")
    @Pattern(regexp = "\\d{11}", message = "CUIT must be exactly 11 digits.")
    private String cuit;

    @NotBlank(message = "First name is required.")
    @Size(max = 50, message = "First name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "First name should only contain letters and spaces.")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(max = 50, message = "Last name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Last name should only contain letters and spaces.")
    private String lastName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    @Size(max = 50, message = "Email must not exceed 50 characters.")
    @Pattern(regexp = ".+@.+\\.[a-zA-Z]{2,}", message = "Email should have a valid domain with at least two characters.")
    private String email;

    @Past(message = "Birth date must be in the past.")
    private LocalDate birthDate;

    @Size(max = 15, message = "Phone must not exceed 15 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Phone number must contain only digits and optional leading +.")
    private String phone;

    @NotBlank(message = "Document type is required.")
    @Size(max = 20, message = "Document type must not exceed 20 characters.")
    private String documentType;

    @NotBlank(message = "Document number is required.")
    @Size(max = 20, message = "Document number must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Document number should contain only letters and numbers.")
    private String documentNumber;

    @Size(max = 50, message = "Street must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.]+$", message = "Street should contain only letters, numbers, spaces, commas, and periods.")
    private String street;

    @Size(max = 10, message = "Number must not exceed 10 characters.")
    @Pattern(regexp = "^[0-9]*$", message = "Number should contain only digits.")
    private String number;

    @Size(max = 50, message = "District must not exceed 50 characters.")
    private String district;

    @Size(max = 50, message = "City must not exceed 50 characters.")
    private String city;

    @Size(max = 50, message = "Province must not exceed 50 characters.")
    private String province;

    @Size(max = 20, message = "Postal code must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Postal code should contain only letters and numbers.")
    private String postalCode;

    @NotNull(message = "Institution name is required.")
    private Institution institutionName;

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 25, message = "Password must be between 8 and 25 characters.")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$", message = "Password must contain at least one uppercase letter, one number, and one special character.")
    private String password;

}
