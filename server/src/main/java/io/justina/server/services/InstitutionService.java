package io.justina.server.services;

import io.justina.server.dtos.request.InstitutionRequestDTO;
import io.justina.server.dtos.response.InstitutionResponseDTO;
import java.util.List;

public interface InstitutionService {

    InstitutionResponseDTO createInstitution(InstitutionRequestDTO institutionRequestDTO);

    InstitutionResponseDTO getInstitutionById(Long id);

    List<InstitutionResponseDTO> getAllInstitutions();

    InstitutionResponseDTO updateInstitution(Long id, InstitutionRequestDTO institutionRequestDTO);

    void deleteInstitution(Long id);

    void deactivateInstitution(Long id);

}

