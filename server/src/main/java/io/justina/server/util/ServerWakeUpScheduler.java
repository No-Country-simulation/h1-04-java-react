package io.justina.server.util;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@EnableScheduling
public class ServerWakeUpScheduler {

    private final String serverUrl = "https://justina-n2nb.onrender.com/"; // Tu URL del servidor Render

    private final RestTemplate restTemplate = new RestTemplate();

    @Scheduled(fixedRate = 840000) // 14 minutos en milisegundos
    public void keepServerAlive() {
        String healthUrl = serverUrl + "/v1/api/render/health";

        try {
            String result = restTemplate.getForObject(healthUrl, String.class);
            System.out.println("Health Check Result: " + result);
        } catch (Exception e) {
            System.err.println("Error al realizar el Health Check: " + e.getMessage());
        }
    }

}
