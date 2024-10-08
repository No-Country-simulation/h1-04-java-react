package io.justina.server.services.impl;

import io.justina.server.dtos.request.FinancierRequestDTO;
import io.justina.server.dtos.response.FinancierResponseDTO;
import io.justina.server.entities.Address;
import io.justina.server.entities.Financier;
import io.justina.server.repositories.AddressRepository;
import io.justina.server.repositories.FinancierRepository;
import io.justina.server.services.FinancierService;
import io.justina.server.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class FinancierServiceImpl implements FinancierService {

    @Autowired
    private FinancierRepository financierRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Override
    public FinancierResponseDTO createFinancier(FinancierRequestDTO financierRequestDTO) {
        Address address = createAddressFromDTO(financierRequestDTO);
        Financier financier = convertToEntity(financierRequestDTO, address);
        Financier savedFinancier = financierRepository.save(financier);
        return new FinancierResponseDTO(savedFinancier);
    }

    @Override
    @Transactional(readOnly = true)
    public FinancierResponseDTO getFinancierById(Long id) {
        Financier financier = financierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Financier not found with id: " + id));
        return new FinancierResponseDTO(financier);
    }

    @Override
    @Transactional(readOnly = true)
    public List<FinancierResponseDTO> getAllFinanciers() {
        List<Financier> financiers = financierRepository.findAll();
        return financiers.stream()
                .map(FinancierResponseDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public FinancierResponseDTO updateFinancier(Long id, FinancierRequestDTO financierRequestDTO) {
        Financier financier = financierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Financier not found with id: " + id));

        updateFinancierFields(financier, financierRequestDTO);
        Financier updatedFinancier = financierRepository.save(financier);
        return new FinancierResponseDTO(updatedFinancier);
    }

    @Override
    public void deactivateFinancier(Long id) {
        Financier financier = financierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Financier not found with id: " + id));
        financier.setIsActive(false);
        financierRepository.save(financier);
    }

    private Financier convertToEntity(FinancierRequestDTO dto, Address address) {
        return Financier.builder()
                .name(dto.getName())
                .cuit(dto.getCuit())
                .phone(dto.getPhone())
                .email(dto.getEmail())
                .contactPerson(dto.getContactPerson())
                .isActive(true)
                .createdAt(LocalDate.now())
                .address(address)
                .build();
    }

    private void updateFinancierFields(Financier financier, FinancierRequestDTO dto) {
        financier.setName(dto.getName());
        financier.setCuit(dto.getCuit());
        financier.setPhone(dto.getPhone());
        financier.setEmail(dto.getEmail());
        financier.setContactPerson(dto.getContactPerson());
        // Update address if needed
        Address address = financier.getAddress();
        address.setStreet(dto.getStreet());
        address.setNumber(dto.getNumber());
        address.setDistrict(dto.getDistrict());
        address.setCity(dto.getCity());
        address.setProvince(dto.getProvince());
        address.setPostalCode(dto.getPostalCode());
    }

    private Address createAddressFromDTO(FinancierRequestDTO dto) {
        return Address.builder()
                .street(dto.getStreet())
                .number(dto.getNumber())
                .district(dto.getDistrict())
                .city(dto.getCity())
                .province(dto.getProvince())
                .postalCode(dto.getPostalCode())
                .build();
    }

}
