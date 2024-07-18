package io.justina.server.repositories;

import io.justina.server.entities.Financier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinancierRepository extends JpaRepository<Financier, Long> {
}
