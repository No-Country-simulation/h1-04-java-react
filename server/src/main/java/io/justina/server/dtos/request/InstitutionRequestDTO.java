package io.justina.server.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InstitutionRequestDTO {

    @NotBlank(message = "Name is required.")
    @Size(max = 100, message = "Name must not exceed 100 characters.")
    private String name;

    @Size(max = 15, message = "Phone must not exceed 15 characters.")
    @Pattern(regexp = "^\\+?[0-9]*$", message = "Phone number must contain only digits and optional leading +.")
    private String phone;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    @Size(max = 100, message = "Email must not exceed 100 characters.")
    private String email;

    @Size(max = 100, message = "Contact Person must not exceed 100 characters.")
    private String contactPerson;

    @NotBlank(message = "Street is required.")
    @Size(max = 50, message = "Street must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9\\s,.-]+$", message = "Street should contain only letters, numbers, spaces, commas, periods, and hyphens.")
    private String street;

    @NotBlank(message = "Number is required.")
    @Size(max = 10, message = "Number must not exceed 10 characters.")
    @Pattern(regexp = "^[0-9]*$", message = "Number should contain only digits.")
    private String number;

    @NotBlank(message = "District is required.")
    @Size(max = 50, message = "District must not exceed 50 characters.")
    private String district;

    @NotBlank(message = "City is required.")
    @Size(max = 50, message = "City must not exceed 50 characters.")
    private String city;

    @NotBlank(message = "Province is required.")
    @Size(max = 50, message = "Province must not exceed 50 characters.")
    private String province;

    @NotBlank(message = "Postal code is required.")
    @Size(max = 20, message = "Postal code must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Postal code should contain only letters and numbers.")
    private String postalCode;

    @NotNull(message = "Active status is required.")
    private Boolean active;

}
