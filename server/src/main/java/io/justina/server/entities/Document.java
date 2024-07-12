package io.justina.server.entities;

import io.justina.server.enumerations.DocumentType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "document", uniqueConstraints = {@UniqueConstraint(columnNames = "documentNumber")})
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private DocumentType documentType;

    private String documentNumber;

}
