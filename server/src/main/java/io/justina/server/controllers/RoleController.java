package io.justina.server.controllers;

import io.justina.server.dtos.request.RoleRequestDTO;
import io.justina.server.entities.Role;
import io.justina.server.exceptions.RoleNotFoundException;
import io.justina.server.services.RoleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("v1/api/roles")
@Tag(name = "Role", description = "Endpoints to manage roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PostMapping("/create")
    @Operation(summary = "Create a new role", description = "Creates a new role in the system")
    public ResponseEntity<Map<String, Object>> createRole(
            @Parameter(description = "Name of the role to be created", required = true)
            @RequestBody RoleRequestDTO roleRequestDTO) {
        Map<String, Object> response = new HashMap<>();
        try {
            Role role = roleService.createRole(roleRequestDTO.getName());
            response.put("role", role);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getRoleById/{id}")
    @Operation(summary = "Get role by ID", description = "Retrieve detailed information about a role by its ID")
    public ResponseEntity<Map<String, Object>> getRoleById(
            @Parameter(description = "ID of the role to retrieve", required = true)
            @PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Role role = roleService.getRoleById(id);
            response.put("role", role);
            return ResponseEntity.ok(response);
        } catch (RoleNotFoundException e) {
            response.put("message", "Role not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getRoleByName/{name}")
    @Operation(summary = "Get role by name", description = "Retrieve detailed information about a role by its name")
    public ResponseEntity<Map<String, Object>> getRoleByName(
            @Parameter(description = "Name of the role to retrieve", required = true)
            @PathVariable String name) {
        Map<String, Object> response = new HashMap<>();
        try {
            Role role = roleService.getRoleByName(name);
            response.put("role", role);
            return ResponseEntity.ok(response);
        } catch (RoleNotFoundException e) {
            response.put("message", "Role not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("/getAllRoles")
    @Operation(summary = "Get all roles", description = "Retrieve a list of all roles in the system")
    public ResponseEntity<Map<String, Object>> getAllRoles() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<Role> roles = roleService.getAllRoles();
            response.put("roles", roles);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "Internal server error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}