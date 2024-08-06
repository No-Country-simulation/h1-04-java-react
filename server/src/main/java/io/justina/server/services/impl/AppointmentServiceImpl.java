package io.justina.server.services.impl;

import io.justina.server.dtos.request.AppointmentRequestDTO;
import io.justina.server.dtos.response.AppointmentResponseDTO;
import io.justina.server.entities.Appointment;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Patient;
import io.justina.server.exceptions.DoctorNotAvailableException;
import io.justina.server.exceptions.PatientNotAvailableException;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.AppointmentRepository;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.PatientRepository;
import io.justina.server.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public AppointmentResponseDTO createAppointment(AppointmentRequestDTO request) {
        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with the specified ID"));

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found with the specified ID"));

        boolean doctorAvailable = !appointmentRepository.existsByDoctorAndAppointmentDayAndAppointmentHour(doctor, request.getAppointmentDay(), request.getAppointmentHour());
        if (!doctorAvailable) {
            throw new DoctorNotAvailableException("The doctor is not available at the selected time.");
        }

        boolean patientHasAppointment = appointmentRepository.existsByPatientAndAppointmentDayAndAppointmentHour(patient, request.getAppointmentDay(), request.getAppointmentHour());
        if (patientHasAppointment) {
            throw new PatientNotAvailableException("The patient already has an appointment at the selected time.");
        }

        Appointment appointment = Appointment.builder()
                .doctor(doctor)
                .patient(patient)
                .appointmentDay(request.getAppointmentDay())
                .appointmentHour(request.getAppointmentHour())
                .typeOfAppointment(request.getTypeOfAppointment())
                .appointmentDescription(request.getAppointmentDescription())
                .createdAt(LocalDate.now())
                .updatedAt(LocalDate.now())
                .isActive(true)
                .build();

        appointment = appointmentRepository.save(appointment);
        return new AppointmentResponseDTO(appointment);
    }

    @Override
    public AppointmentResponseDTO updateAppointment(Long appointmentId, AppointmentRequestDTO request) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));

        Patient patient = patientRepository.findById(request.getPatientId())
                .orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        appointment.setDoctor(doctor);
        appointment.setPatient(patient);
        appointment.setAppointmentDay(request.getAppointmentDay());
        appointment.setAppointmentHour(request.getAppointmentHour());
        appointment.setTypeOfAppointment(request.getTypeOfAppointment());
        appointment.setAppointmentDescription(request.getAppointmentDescription());
        appointment.setUpdatedAt(LocalDate.now());

        appointment = appointmentRepository.save(appointment);
        return new AppointmentResponseDTO(appointment);
    }

    @Override
    public void deactivateAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));
        appointment.setIsActive(false);
        appointmentRepository.save(appointment);
    }

    @Override
    public AppointmentResponseDTO getAppointmentById(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));
        return new AppointmentResponseDTO(appointment);
    }

    @Override
    public List<AppointmentResponseDTO> getAppointmentsByDoctorId(Long doctorId) {
        List<Appointment> appointments = appointmentRepository.findByDoctorId(doctorId);
        return appointments.stream().map(AppointmentResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<AppointmentResponseDTO> getAppointmentsByPatientId(Long patientId) {
        List<Appointment> appointments = appointmentRepository.findByPatientId(patientId);
        return appointments.stream().map(AppointmentResponseDTO::new).collect(Collectors.toList());
    }

    @Override
    public List<AppointmentResponseDTO> getAllAppointments() {
        List<Appointment> appointments = appointmentRepository.findAll();
        return appointments.stream()
                .map(AppointmentResponseDTO::new)
                .collect(Collectors.toList());
    }


}