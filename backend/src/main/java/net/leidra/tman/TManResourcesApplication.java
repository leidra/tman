package net.leidra.tman;

import net.leidra.domain.config.DomainConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(value = {DomainConfiguration.class})
public class TManResourcesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TManResourcesApplication.class, args);
	}

}
