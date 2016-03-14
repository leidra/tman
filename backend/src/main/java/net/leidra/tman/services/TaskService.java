package net.leidra.tman.services;

import net.leidra.domain.entities.Task;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * Created by afuentes on 12/03/16.
 */
@RestController
public class TaskService {

    @CrossOrigin
    @RequestMapping("/resources/tasks")
    public List<Task> findTasks() {
        return Arrays.asList(
            new Task(1l, "Task 1", "Task 1 description"),
            new Task(1l, "Task 2", "Task 2 description"),
            new Task(1l, "Task 3", "Task 3 description"),
            new Task(1l, "Task 4", "Task 4 description")
        );
    }
}
