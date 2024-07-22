package io.justina.server.services;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;

import javax.management.relation.RoleNotFoundException;
import java.util.List;

public interface DoctorService {

    DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) throws RoleNotFoundException;
    DoctorResponseDTO getDoctorById(Long doctorId);
    List<DoctorResponseDTO> getAllDoctors();
    DoctorResponseDTO updateDoctor(Long doctorId, DoctorRequestDTO doctorRequestDTO);
    DoctorResponseDTO deleteDoctor(Long doctorId);
    void deactivateDoctor(Long doctorId);

}
