package io.justina.server.repositories;

import io.justina.server.entities.MedicalPrescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalPrescriptionRepository extends JpaRepository<MedicalPrescription, Long> {

}
