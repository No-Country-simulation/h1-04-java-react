package io.justina.server.services;

import io.justina.server.entities.Role;
import java.util.List;

public interface RoleService {

    Role createRole(String name);
    Role getRoleById(Long id);
    Role getRoleByName(String name);
    List<Role> getAllRoles();

}
