package io.justina.server.services.impl;

import io.justina.server.dtos.request.LaboratoryRequestDTO;
import io.justina.server.dtos.response.LaboratoryResponseDTO;
import io.justina.server.entities.Address;
import io.justina.server.entities.Laboratory;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.LaboratoryRepository;
import io.justina.server.services.LaboratoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class LaboratoryServiceImpl implements LaboratoryService {

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Override
    public LaboratoryResponseDTO createLaboratory(LaboratoryRequestDTO laboratoryRequestDTO) {
        Laboratory laboratory = convertToEntity(laboratoryRequestDTO);
        Laboratory savedLaboratory = laboratoryRepository.save(laboratory);
        return new LaboratoryResponseDTO(savedLaboratory);
    }

    @Override
    @Transactional(readOnly = true)
    public LaboratoryResponseDTO getLaboratoryById(Long id) {
        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found with id: " + id));
        return new LaboratoryResponseDTO(laboratory);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LaboratoryResponseDTO> getAllLaboratories() {
        List<Laboratory> laboratories = laboratoryRepository.findAll();
        return laboratories.stream()
                .map(LaboratoryResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public LaboratoryResponseDTO updateLaboratory(Long id, LaboratoryRequestDTO laboratoryRequestDTO) {
        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found with id: " + id));

        updateLaboratoryFields(laboratory, laboratoryRequestDTO);

        Laboratory updatedLaboratory = laboratoryRepository.save(laboratory);
        return new LaboratoryResponseDTO(updatedLaboratory);
    }

    @Override
    public void deleteLaboratory(Long id) {
        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found with id: " + id));
        laboratoryRepository.delete(laboratory);
    }

    @Override
    public void deactivateLaboratory(Long id) {
        Laboratory laboratory = laboratoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Laboratory not found with id: " + id));
        laboratory.setActive(false);
        laboratoryRepository.save(laboratory);
    }

    private Laboratory convertToEntity(LaboratoryRequestDTO dto) {
        return Laboratory.builder()
                .name(dto.getName())
                .cuit(dto.getCuit())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .responsible(dto.getResponsible())
                .address(Address.builder()
                        .street(dto.getStreet())
                        .number(dto.getNumber())
                        .district(dto.getDistrict())
                        .city(dto.getCity())
                        .province(dto.getProvince())
                        .postalCode(dto.getPostalCode())
                        .build())
                .build();
    }

    private void updateLaboratoryFields(Laboratory laboratory, LaboratoryRequestDTO dto) {
        laboratory.setName(dto.getName());
        laboratory.setCuit(dto.getCuit());
        laboratory.setPhone(dto.getPhone());
        laboratory.setEmail(dto.getEmail());
        laboratory.setResponsible(dto.getResponsible());

        Address address = laboratory.getAddress();
        if (address != null) {
            address.setStreet(dto.getStreet());
            address.setNumber(dto.getNumber());
            address.setDistrict(dto.getDistrict());
            address.setCity(dto.getCity());
            address.setProvince(dto.getProvince());
            address.setPostalCode(dto.getPostalCode());
        }
    }

}
