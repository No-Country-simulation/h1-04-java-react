package io.justina.server.services;

import io.justina.server.dtos.request.LaboratoryRequestDTO;
import io.justina.server.dtos.response.LaboratoryResponseDTO;
import java.util.List;

public interface LaboratoryService {

    LaboratoryResponseDTO createLaboratory(LaboratoryRequestDTO laboratoryRequestDTO);
    LaboratoryResponseDTO getLaboratoryById(Long id);
    List<LaboratoryResponseDTO> getAllLaboratories();
    LaboratoryResponseDTO updateLaboratory(Long id, LaboratoryRequestDTO laboratoryRequestDTO);
    void deactivateLaboratory(Long id);

}
