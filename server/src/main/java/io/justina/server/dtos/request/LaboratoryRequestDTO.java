package io.justina.server.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LaboratoryRequestDTO {

    @NotBlank(message = "Name is required.")
    @Size(max = 100, message = "Name must not exceed 100 characters.")
    private String name;

    @NotBlank(message = "CUIT is required.")
    @Size(max = 11, message = "CUIT must not exceed 11 characters.")
    @Pattern(regexp = "\\d{11}", message = "CUIT must be exactly 11 digits.")
    private String cuit;

    @Size(max = 15, message = "Phone must not exceed 15 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Phone number must contain only digits and optional leading +.")
    private String phone;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    @Size(max = 100, message = "Email must not exceed 100 characters.")
    @Pattern(regexp = ".+@.+\\.[a-zA-Z]{2,}", message = "Email should have a valid domain with at least two characters")
    private String email;

    @Size(max = 100, message = "Responsible must not exceed 100 characters.")
    private String responsible;

    @Size(max = 50, message = "Street must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.-]+$", message = "Street should contain only letters, numbers, spaces, commas, periods, and hyphens.")
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

    private LocalDate createdAt;

    private LocalDate updatedAt;

    private Boolean active;

}