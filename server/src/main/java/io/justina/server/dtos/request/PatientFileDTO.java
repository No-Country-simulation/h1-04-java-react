package io.justina.server.dtos.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientFileDTO {

    @NotNull(message = "File is required.")
    private MultipartFile file;

}