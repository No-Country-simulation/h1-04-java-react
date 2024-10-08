package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.entities.User;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private String institutionName;
    private String role;
    private Boolean isActive;
    private Document document;
    private Address address;

    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.birthDate = user.getBirthDate();
        this.phone = user.getPhone();
        this.institutionName = user.getInstitution().getName();
        this.role = user.getRole().getName();
        this.isActive = user.getIsActive();
        this.document = user.getDocument();
        this.address = user.getAddress();
    }

}
