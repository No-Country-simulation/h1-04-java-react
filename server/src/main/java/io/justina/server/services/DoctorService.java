package io.justina.server.services;

import io.justina.server.dtos.request.DoctorRequestDTO;
import io.justina.server.dtos.request.DoctorUpdateRequestDTO;
import io.justina.server.dtos.response.DoctorResponseDTO;
import io.justina.server.dtos.response.UpdateDoctorResponseDTO;

import javax.management.relation.RoleNotFoundException;
import java.util.List;

public interface DoctorService {

    DoctorResponseDTO createDoctor(DoctorRequestDTO doctorRequestDTO) throws RoleNotFoundException;
    DoctorResponseDTO getDoctorById(Long doctorId);
    List<DoctorResponseDTO> getAllDoctors();
    UpdateDoctorResponseDTO updateDoctor(Long id, DoctorUpdateRequestDTO doctorUpdateRequestDTO);
    void deactivateDoctor(Long doctorId);

}
