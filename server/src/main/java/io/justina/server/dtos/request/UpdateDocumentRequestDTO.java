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

    @Pattern(regexp = "^\\d{8}$", message = "Document number must contain exactly 8 digits.")
    private String documentNumber;

}
