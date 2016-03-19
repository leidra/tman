package net.leidra.domain.config;

import net.leidra.domain.entities.EntitiesPackageSupplier;
import net.leidra.domain.repositories.RepositoriesPackageSupplier;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by afuentes on 19/03/16.
 */
@Configuration
@EnableJpaRepositories(basePackageClasses = RepositoriesPackageSupplier.class)
@EntityScan(basePackageClasses = EntitiesPackageSupplier.class)
public class DomainConfiguration {
}
