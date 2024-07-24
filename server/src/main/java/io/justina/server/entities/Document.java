package io.justina.server.entities;

import io.justina.server.enumerations.DocumentType;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

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
    private Long id;

    private DocumentType documentType;
    private String documentNumber;

    @ElementCollection
    private List<String> documentImages;

}
