package io.justina.server.services;

import io.justina.server.dtos.request.FinancierRequestDTO;
import io.justina.server.dtos.response.FinancierResponseDTO;
import java.util.List;

public interface FinancierService {

    FinancierRequestDTO createFinancier(FinancierRequestDTO financierRequestDTO);

    FinancierResponseDTO getFinancierById(long id);

    List<FinancierResponseDTO> getAllFinanciers();

    FinancierRequestDTO updateFinancier(long id, FinancierRequestDTO financierRequestDTO);

    void deleteFinancier(Long id);

    void deactivateFinancierr(Long id);

}
