package io.justina.server.controllers;

import io.justina.server.entities.Role;
import io.justina.server.services.RoleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("v1/api/roles")
@Tag(name = "Role", description = "Endpoints to manage roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping("/create")
    @Operation(summary = "Create a new role", description = "Creates a new role in the system")
    public ResponseEntity<Role> createRole(
            @Parameter(description = "Name of the role to be created", required = true)
            @RequestBody String name) {
        Role role = roleService.createRole(name);
        return ResponseEntity.status(HttpStatus.CREATED).body(role);
    }

    @GetMapping("/getRoleById/{id}")
    @Operation(summary = "Get role by ID", description = "Retrieve detailed information about a role by its ID")
    public ResponseEntity<Role> getRoleById(
            @Parameter(description = "ID of the role to retrieve", required = true)
            @PathVariable Long id) {
        Role role = roleService.getRoleById(id);
        return ResponseEntity.ok(role);
    }

    @GetMapping("/getRoleByName/{name}")
    @Operation(summary = "Get role by name", description = "Retrieve detailed information about a role by its name")
    public ResponseEntity<Role> getRoleByName(
            @Parameter(description = "Name of the role to retrieve", required = true)
            @PathVariable String name) {
        Role role = roleService.getRoleByName(name);
        return ResponseEntity.ok(role);
    }

    @GetMapping("/getAllRoles")
    @Operation(summary = "Get all roles", description = "Retrieve a list of all roles in the system")
    public ResponseEntity<List<Role>> getAllRoles() {
        List<Role> roles = roleService.getAllRoles();
        return ResponseEntity.ok(roles);
    }

}