package io.justina.server.entities;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "laboratory")
public class Laboratory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long LaboratoryId;

    private String name;

    private String cuit;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    private String phone;

    private String email;

    private String responsible;

    private LocalDate createdAt;

    private LocalDate updatedAt;

    private Boolean active;

    @OneToMany(mappedBy = "laboratory")
    private List<Medication> medications;

}
