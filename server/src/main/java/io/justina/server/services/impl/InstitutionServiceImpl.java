package io.justina.server.services.impl;

import io.justina.server.dtos.request.InstitutionRequestDTO;
import io.justina.server.dtos.response.InstitutionResponseDTO;
import io.justina.server.entities.Address;
import io.justina.server.entities.Institution;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.InstitutionRepository;
import io.justina.server.services.InstitutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
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
        institution.setCreatedAt(LocalDate.now());
        institution.setUpdatedAt(LocalDate.now());
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
        institution.setUpdatedAt(LocalDate.now());

        Institution updatedInstitution = institutionRepository.save(institution);
        return new InstitutionResponseDTO(updatedInstitution);
    }

    @Override
    public void deleteInstitution(Long id) {
        Institution institution = institutionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));
        institutionRepository.delete(institution);
    }

    @Override
    public void deactivateInstitution(Long id) {
        Institution institution = institutionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Institution not found with id: " + id));
        institution.setActive(false);
        institution.setUpdatedAt(LocalDate.now());
        institutionRepository.save(institution);
    }

    private Institution convertToEntity(InstitutionRequestDTO dto) {
        return Institution.builder()
                .name(dto.getName())
                .address(Address.builder()
                        .street(dto.getStreet())
                        .number(dto.getNumber())
                        .district(dto.getDistrict())
                        .city(dto.getCity())
                        .province(dto.getProvince())
                        .postalCode(dto.getPostalCode())
                        .build())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .contactPerson(dto.getContactPerson())
                .active(dto.getActive())
                .build();
    }

    private void updateInstitutionFields(Institution institution, InstitutionRequestDTO dto) {
        institution.setName(dto.getName());
        institution.setPhone(dto.getPhone());
        institution.setEmail(dto.getEmail());
        institution.setContactPerson(dto.getContactPerson());
        institution.setActive(dto.getActive());

        Address address = institution.getAddress();
        address.setStreet(dto.getStreet());
        address.setNumber(dto.getNumber());
        address.setDistrict(dto.getDistrict());
        address.setCity(dto.getCity());
        address.setProvince(dto.getProvince());
        address.setPostalCode(dto.getPostalCode());
    }

}
