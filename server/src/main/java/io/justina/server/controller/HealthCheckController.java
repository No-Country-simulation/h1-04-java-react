package io.justina.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("v1/api/render")
public class HealthCheckController {

    @GetMapping("/health")
    public String checkHealth() {
        return "Server is awake and running!";
    }

}
