package io.justina.server.services;


import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import org.springframework.http.ResponseEntity;


import java.util.List;


public interface DoctorService {

    DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO);
    DoctorResponseDTO getDoctorById(Long doctorId);
    List<DoctorResponseDTO> getAllDoctors();
    DoctorResponseDTO updateDoctor(Long doctorId, DoctorRequestDTO doctorRequestDTO);
    DoctorResponseDTO deleteDoctor(Long doctorId);
    DoctorResponseDTO deactivateDoctor(Long doctorId);

}
