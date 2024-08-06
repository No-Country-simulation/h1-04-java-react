package io.justina.server.services.impl;

import io.justina.server.entities.Role;
import io.justina.server.exceptions.ResourceNotFoundException;
import io.justina.server.repositories.RoleRepository;
import io.justina.server.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Role createRole(String name) {
        if (roleRepository.findByName(name).isPresent()) {
            throw new IllegalArgumentException("Role with name " + name + " already exists.");
        }
        Role role = new Role();
        role.setName(name);
        return roleRepository.save(role);
    }

    @Override
    public Role getRoleById(Long id) {
        return roleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Role not found with id: " + id));
    }

    @Override
    public Role getRoleByName(String name) {
        return roleRepository.findByName(name)
                .orElseThrow(() -> new ResourceNotFoundException("Role not found with name: " + name));
    }

    @Override
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }

}
