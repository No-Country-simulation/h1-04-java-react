package io.justina.server.repositories;

import io.justina.server.entities.Doctor;
import io.justina.server.entities.User;
import io.justina.server.enumerations.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Set;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Query("SELECT COUNT(d) > 0 FROM Doctor d WHERE d.licenceNumber = :licenceNumber")
    boolean existsByLicenceNumber(@Param("licenceNumber") String licenceNumber);

    @Query("SELECT CASE WHEN COUNT(d) > 0 THEN true ELSE false END FROM Doctor d JOIN d.user u WHERE u.email = :email")
    boolean existsByEmail(@Param("email") String email);

    @Query("SELECT CASE WHEN COUNT(d) > 0 THEN true ELSE false END FROM Doctor d JOIN d.user u WHERE u.document.documentNumber = :documentNumber")
    boolean existsByDocumentNumber(@Param("documentNumber") String documentNumber);


    @Query("SELECT d FROM Doctor d JOIN d.specialties s WHERE s IN :specialties")
    List<Doctor> findDoctorsBySpecialties(@Param("specialties") Set<Specialty> specialties);

    Doctor findByUser(User user);

}

