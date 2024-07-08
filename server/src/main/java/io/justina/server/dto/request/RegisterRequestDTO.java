package io.justina.server.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
import java.time.LocalDate;

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
    @Size(min = 8, max = 25, message = "Password must be at least 8 characters.")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$", message = "Password must contain at least one uppercase letter, one number, and one special character.")
    private String password;

    @NotBlank(message = "First name is required.")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "First name should only contain letters and spaces")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Last name should only contain letters and spaces")
    private String lastName;

    private LocalDate birthDate;

    @Size(max = 15, message = "Phone must not exceed 15 characters ")
    private String phone;

    @NotBlank(message = "Document type is required.")
    private String documentType;

    @NotBlank(message = "Document number is required.")
    @Size(max = 15, message = "Phone must not exceed 15 characters ")
    private String documentNumber;

    @Size(max = 15, message = "Street must not exceed 15 characters ")
    private String street;

    @Size(max = 100, message = "Number must not exceed 100 characters ")
    private String number;

    @Size(max = 50, message = "District must not exceed 50 characters ")
    private String district;

    @Size(max = 50, message = "City must not exceed 50 characters ")
    private String city;

    @Size(max = 50, message = "Province must not exceed 50 characters ")
    private String province;

    @Size(max = 20, message = "Phone must not exceed 20 characters ")
    private String postalCode;

}
