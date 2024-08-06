package io.justina.server.repositories;

import io.justina.server.entities.Patient;
import io.justina.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("SELECT p FROM Patient p WHERE p.user.firstName = :firstName AND p.user.lastName = :lastName AND p.user.email = :email")
    Optional<Patient> findByFirstNameAndLastNameAndEmail(String firstName, String lastName, String email);

    Patient findByUser(User user);

    // Método para verificar la existencia de un email a través de la relación con User
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Patient p WHERE p.user.email = :email")
    boolean existsByEmail(@Param("email") String email);

    // Método para verificar la existencia de un número de documento a través de la relación con User
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Patient p WHERE p.user.document.documentNumber = :documentNumber")
    boolean existsByDocumentNumber(@Param("documentNumber") String documentNumber);

}