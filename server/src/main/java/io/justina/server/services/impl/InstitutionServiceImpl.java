package io.justina.server.services.impl;

import io.justina.server.dtos.request.InstitutionRequestDTO;
import io.justina.server.dtos.response.InstitutionResponseDTO;
import io.justina.server.entities.Institution;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.InstitutionRepository;
import io.justina.server.services.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class InstitutionServiceImpl implements InstitutionService {

    @Autowired
    private InstitutionRepository institutionRepository;

    @Override
    public InstitutionResponseDTO createInstitution(InstitutionRequestDTO institutionRequestDTO) {
        Institution institution = convertToEntity(institutionRequestDTO);
        institution.setActive(true);
        Institution savedInstitution = institutionRepository.save(institution);
        return new InstitutionResponseDTO(savedInstitution);
    }

    @Override
    @Transactional(readOnly = true)
    public InstitutionResponseDTO getInstitutionById(Long id) {
        Institution institution = institutionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));
        return new InstitutionResponseDTO(institution);
    }

    @Override
    @Transactional(readOnly = true)
    public List<InstitutionResponseDTO> getAllInstitutions() {
        List<Institution> institutions = institutionRepository.findAll();
        return institutions.stream()
                .map(InstitutionResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public InstitutionResponseDTO updateInstitution(Long id, InstitutionRequestDTO institutionRequestDTO) {
        Institution institution = institutionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));

        updateInstitutionFields(institution, institutionRequestDTO);

        Institution updatedInstitution = institutionRepository.save(institution);
        return new InstitutionResponseDTO(updatedInstitution);
    }

    @Override
    public void deactivateInstitution(Long id) {
        Institution institution = institutionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));
        institution.setActive(false);
        institutionRepository.save(institution);
    }

    private Institution convertToEntity(InstitutionRequestDTO dto) {
        return Institution.builder()
                .name(dto.getName())
                .build();
    }

    private void updateInstitutionFields(Institution institution, InstitutionRequestDTO dto) {
        institution.setName(dto.getName());
    }

}
