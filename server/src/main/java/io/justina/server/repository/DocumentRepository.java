package io.justina.server.repository;

import io.justina.server.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    boolean existsByDocumentNumber(String documentNumber);

}
