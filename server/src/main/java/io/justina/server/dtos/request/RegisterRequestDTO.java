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
public class RegisterRequestDTO {

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    @Size(max = 50, message = "Email must not exceed 50 characters ")
    @Pattern(regexp = ".+@.+\\.[a-zA-Z]{2,}", message = "Email should have a valid domain with at least two characters")
    private String email;

    @NotBlank(message = "Password is required.")
    @Size(min = 8, max = 25, message = "Password must be between 8 and 25 characters.")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$", message = "Password must contain at least one uppercase letter, one number, and one special character.")
    private String password;

    @NotBlank(message = "First name is required.")
    @Size(max = 50, message = "First name must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "First name should only contain letters and spaces.")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(max = 50, message = "Last name must not exceed 50 characters.")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Last name should only contain letters and spaces.")
    private String lastName;

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
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Street should contain only letters and numbers.")
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

    @NotEmpty(message = "At least one role must be specified.")
    private List<String> roles;

}
