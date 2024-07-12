package io.justina.server.repositories;

import io.justina.server.entities.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    boolean existsByDocumentNumber(String documentNumber);

}
