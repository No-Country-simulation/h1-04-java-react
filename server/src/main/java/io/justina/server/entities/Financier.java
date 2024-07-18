package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="financier")
public class Financier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String cuit;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    private String phone;
    private String email;
    private String password;
    private String contactPerson;
    private LocalDate createdAt;
    private LocalDate updatedAt;
    private Boolean isActive;

}
