package io.justina.server.dtos.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.justina.server.enumerations.Day;
import io.justina.server.enumerations.Specialty;
import jakarta.annotation.PostConstruct;
import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DoctorRequestDTO {

    @NotEmpty(message = "Specialty is required.")
    private Set<Specialty> specialties;

    @NotBlank(message = "Licence number is required.")
    @Size(min = 5, max = 8, message = "License number must be between 5 and 8 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Licence number should contain only letters and numbers.")
    private String licenceNumber;

    @NotEmpty(message = "Workdays are required.")
    private Set<Day> workdays;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    @Size(max = 50, message = "Email must not exceed 50 characters.")
    @Pattern(regexp = ".+@.+\\.[a-zA-Z]{2,}", message = "Email should have a valid domain with at least two characters.")
    private String email;

    @NotBlank(message = "First name is required.")
    @Size(max = 50, message = "First name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "First name should only contain letters and spaces.")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(max = 50, message = "Last name must not exceed 50 characters.")
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "Last name should only contain letters and spaces.")
    private String lastName;

    @Past(message = "Birth date must be in the past.")
    private LocalDate birthDate;

    @Size(max = 15, message = "Phone must not exceed 15 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Phone number must contain only digits and optional leading +.")
    private String phone;

    @NotBlank(message = "Document type is required.")
    @Size(max = 20, message = "Document type must not exceed 20 characters.")
    private String documentType;

    @Pattern(regexp = "^\\d{8}$", message = "Document number must contain exactly 8 digits.")
    private String documentNumber;

    @Size(max = 50, message = "Street must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-ZÀ-ÿ0-9\\s.,'-]*$", message = "Street should contain only letters, spaces, numbers, and common punctuation.")
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
    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "Postal code should contain only letters and numbers.")
    private String postalCode;

    @NotNull(message = "ID Financier is required.")
    private Long idFinancier;

    @PostConstruct
    public void init() {
        if (street != null && street.isEmpty()) street = null;
        if (number != null && number.isEmpty()) number = null;
        if (district != null && district.isEmpty()) district = null;
        if (city != null && city.isEmpty()) city = null;
        if (province != null && province.isEmpty()) province = null;
        if (postalCode != null && postalCode.isEmpty()) postalCode = null;
        if (phone != null && phone.isEmpty()) phone = null;
        if (birthDate == null) birthDate = null;
    }

}
