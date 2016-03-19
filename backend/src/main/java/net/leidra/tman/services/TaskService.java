package net.leidra.tman.services;

import net.leidra.domain.entities.Task;
import net.leidra.domain.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

/**
 * Created by afuentes on 12/03/16.
 */
@RestController
@RequestMapping("/resources/tasks")
public class TaskService {
    private TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin
    @RequestMapping
    public List<Task> findAll() {
        return Arrays.asList(
            new Task(1l, "Task 1", "Task 1 description"),
            new Task(2l, "Task 2", "Task 2 description"),
            new Task(3l, "Task 3", "Task 3 description"),
            new Task(4l, "Task 4", "Task 4 description")
        );
    }

    @CrossOrigin
    @RequestMapping("/{id}")
    public Task findOne(@PathVariable Long id) {
        return findAll().stream().filter(t -> t.getId().equals(id)).findFirst().orElse(null);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST)
    public Task create(@RequestBody @Valid Task task) {
        if(task != null) {
            if(task.getId() != null) {
//                throw new
            }

            task = repository.save(task);
        }

        return task;
    }


}