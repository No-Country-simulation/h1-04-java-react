package io.justina.server.repositories;

import io.justina.server.entities.Doctor;
import io.justina.server.enumerations.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    @Query("SELECT d FROM Doctor d JOIN d.specialties s WHERE s IN :specialties")
    List<Doctor> findDoctorsBySpecialties(@Param("specialties") Set<Specialty> specialties);

}
