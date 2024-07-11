package io.justina.server.dtos.response;

import io.justina.server.entities.Address;
import io.justina.server.entities.Document;
import io.justina.server.entities.User;
import io.justina.server.enumerations.Institution;
import io.justina.server.enumerations.Role;
import io.justina.server.enumerations.Specialty;
import lombok.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

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
    private Set<Role> roles;
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
        this.roles = user.getRoles();
        this.isActive = user.getIsActive();
        this.deletedAt = user.getDeletedAt();
        this.document = user.getDocument();
        this.address = user.getAddress();
    }

}
