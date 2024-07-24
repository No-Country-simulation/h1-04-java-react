package io.justina.server.repositories;

import io.justina.server.entities.Patient;
import io.justina.server.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {

    @Query("SELECT p FROM Patient p WHERE p.user.firstName = :firstName AND p.user.lastName = :lastName AND p.user.email = :email")
    Optional<Patient> findByFirstNameAndLastNameAndEmail(String firstName, String lastName, String email);

    Patient findByUser(User user);

}