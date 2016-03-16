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
@RequestMapping("/resources/")
public class TaskService {

    @CrossOrigin
    @RequestMapping("tasks")
    public List<Task> findTasks() {
        return Arrays.asList(
            new Task(1l, "Task 1", "Task 1 description"),
            new Task(2l, "Task 2", "Task 2 description"),
            new Task(3l, "Task 3", "Task 3 description"),
            new Task(4l, "Task 4", "Task 4 description")
        );
    }

    @CrossOrigin
    @RequestMapping("task/{id}")
    public Task findTask(@PathVariable Long id) {
        return findTasks().stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
    }
}