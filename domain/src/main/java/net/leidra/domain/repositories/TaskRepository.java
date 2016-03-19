package net.leidra.domain.repositories;

import net.leidra.domain.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by afuentes on 19/03/16.
 */
@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
}
