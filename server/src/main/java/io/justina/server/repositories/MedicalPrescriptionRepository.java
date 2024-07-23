package io.justina.server.repositories;

import io.justina.server.entities.MedicalPrescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalPrescriptionRepository extends JpaRepository<MedicalPrescription, Long> {

    @Query("SELECT COUNT(t) > 0 FROM Treatment t JOIN t.medicalPrescriptions mp WHERE mp.id = :medicalPrescriptionId")
    boolean isMedicalPrescriptionAssignedToAnyTreatment(@Param("medicalPrescriptionId") Long medicalPrescriptionId);

}
