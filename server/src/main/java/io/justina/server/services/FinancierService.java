package io.justina.server.services;

import io.justina.server.dtos.request.FinancierRequestDTO;
import io.justina.server.dtos.response.FinancierResponseDTO;
import java.util.List;

public interface FinancierService {

    FinancierResponseDTO createFinancier(FinancierRequestDTO financierRequestDTO);
    FinancierResponseDTO getFinancierById(Long id);
    List<FinancierResponseDTO> getAllFinanciers();
    FinancierResponseDTO updateFinancier(Long id, FinancierRequestDTO financierRequestDTO);
    void deactivateFinancier(Long id);

}
