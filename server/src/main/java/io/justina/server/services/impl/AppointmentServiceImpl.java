package io.justina.server.services.impl;

import io.justina.server.dtos.request.AppointmentRequestDTO;
import io.justina.server.dtos.response.AppointmentResponseDTO;
import io.justina.server.entities.Appointment;
import io.justina.server.entities.Doctor;
import io.justina.server.entities.Patient;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.AppointmentRepository;
import io.justina.server.repositories.DoctorRepository;
import io.justina.server.repositories.PatientRepository;
import io.justina.server.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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
        List<Doctor> doctors = doctorRepository.findDoctorsBySpecialties(request.getDoctorSpecialties());
        if (doctors.isEmpty()) {
            throw new ResourceNotFoundException("No doctors available for the specified specialty");
        }

        Doctor selectedDoctor = doctors.stream()
                .filter(doctor -> doctor.getDoctorId().equals(request.getDoctorId()))
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found with the specified ID"));


        Patient patient = patientRepository.findByFirstNameAndLastNameAndEmail(
                request.getPatientFirstName(),
                request.getPatientLastName(),
                request.getPatientEmail()
        ).orElseThrow(() -> new ResourceNotFoundException("Patient not found"));


        Appointment appointment = new Appointment();
        appointment.setDoctor(selectedDoctor);
        appointment.setPatient(patient);
        appointment.setAppointmentDays(request.getAppointmentDays());
        appointment.setAppointmentHours(request.getAppointmentHours());
        appointment.setTypeOfAppointment(request.getTypeOfAppointment());
        appointment.setAppointmentDescription(request.getAppointmentDescription());
        appointment.setCreatedAt(LocalDateTime.now());
        appointment.setUpdatedAt(LocalDateTime.now());


        appointment = appointmentRepository.save(appointment);
        return new AppointmentResponseDTO(appointment);
    }

    @Override
    public AppointmentResponseDTO updateAppointment(Long appointmentId, AppointmentRequestDTO request) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));

        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor not found"));

        if (!doctor.getSpecialties().containsAll(request.getDoctorSpecialties())) {
            throw new ResourceNotFoundException("Doctor does not match the required specialties.");
        }


        Patient patient = patientRepository.findByFirstNameAndLastNameAndEmail(
                request.getPatientFirstName(),
                request.getPatientLastName(),
                request.getPatientEmail()
        ).orElseThrow(() -> new ResourceNotFoundException("Patient not found"));

        appointment.setDoctor(doctor);
        appointment.setPatient(patient);
        appointment.setAppointmentDays(request.getAppointmentDays());
        appointment.setAppointmentHours(request.getAppointmentHours());
        appointment.setTypeOfAppointment(request.getTypeOfAppointment());
        appointment.setAppointmentDescription(request.getAppointmentDescription());
        appointment.setUpdatedAt(LocalDateTime.now());

        appointment = appointmentRepository.save(appointment);
        return new AppointmentResponseDTO(appointment);
    }

    @Override
    public void deleteAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment not found"));
        appointmentRepository.delete(appointment);
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

}