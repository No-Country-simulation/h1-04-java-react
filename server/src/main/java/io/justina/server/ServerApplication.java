package io.justina.server;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public OpenAPI customOpenAPI(){
		return new OpenAPI()
				.info(new Info()
						.title("Justina.io")
						.version("1.0.0")
						.description("Justina.io - Multiplicate x7")
						.termsOfService("https://swagger.io/terms")
						.license(new License()
						.name("Apache 2.0")
						.url("https://springdoc.org")));
	}

}
