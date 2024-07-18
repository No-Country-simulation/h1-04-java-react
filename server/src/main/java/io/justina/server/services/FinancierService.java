package io.justina.server.services;

public interface FinancierService {

    FinancierRequestDTO createFinancier(FinancierRequestDTO financierRequestDTO);

    FinancierResponseDTO getFinancierById(long id);

    List<FinancierResponseDTO> getAllFinanciers();

    FinancierRequestDTO updateFinancier(long id, FinancierRequestDTO financierRequestDTO);

    void deleteFinancier(Long id);

    void deactivateFinancierr(Long id);

}
