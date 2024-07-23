package io.justina.server.dtos.request;

import io.justina.server.enumerations.DocumentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDocumentRequestDTO {

    @NotBlank(message = "Document type is required.")
    @Size(max = 20, message = "Document type must not exceed 20 characters.")
    private String documentType;

    @NotBlank(message = "Document number is required.")
    @Size(max = 20, message = "Document number must not exceed 20 characters.")
    @Pattern(regexp = "^[a-zA-Z0-9]+$", message = "Document number should contain only letters and numbers.")
    private String documentNumber;

}
