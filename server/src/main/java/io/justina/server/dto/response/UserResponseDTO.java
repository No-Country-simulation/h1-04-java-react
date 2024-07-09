package io.justina.server.dto.response;

import io.justina.server.entity.Address;
import io.justina.server.entity.Document;
import io.justina.server.entity.User;
import io.justina.server.enumeration.Institution;
import io.justina.server.enumeration.Role;
import lombok.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDTO {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String phone;
    private Institution institutionName;
    private Role role;
    private Boolean isActive;
    private LocalDate deletedAt;
    private Document document;
    private Address address;

    public UserResponseDTO(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.birthDate = user.getBirthDate();
        this.phone = user.getPhone();
        this.institutionName = user.getInstitutionName();
        this.role = user.getRole();
        this.isActive = user.getIsActive();
        this.deletedAt = user.getDeletedAt();
        this.document = user.getDocument();
        this.address = user.getAddress();
    }

}
