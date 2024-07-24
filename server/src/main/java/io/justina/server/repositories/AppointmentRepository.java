package io.justina.server.repositories;

import io.justina.server.entities.Appointment;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Patient;
import io.justina.server.enumerations.AvailableHours;
import io.justina.server.enumerations.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> findByDoctorId(Long doctorId);
    List<Appointment> findByPatientId(Long patientId);
    boolean existsByDoctorAndAppointmentDayAndAppointmentHour(Doctor doctor, Day appointmentDay, AvailableHours appointmentHour);
    boolean existsByPatientAndAppointmentDayAndAppointmentHour(Patient patient, Day appointmentDay, AvailableHours appointmentHour);

}
