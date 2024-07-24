package io.justina.server.dtos.request;

import jakarta.validation.constraints.Size;
import lombok.*;
import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PathologiesUpdateDTO {

    @Size(max = 5000, message = "Pathologies must not exceed 5000 characters.")
    private List<String> pathologies;

}
