package io.justina.server.repositories;

import io.justina.server.entities.Laboratory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LaboratoryRepository extends JpaRepository<Laboratory, Long> {

    Optional<Laboratory> findByLaboratoryId(Long laboratoryId);

}
