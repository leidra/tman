package net.leidra.tman.services;

import net.leidra.domain.entities.Task;
import net.leidra.domain.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

/**
 * Created by afuentes on 12/03/16.
 */
@CrossOrigin
@RestController
@RequestMapping("/resources/tasks")
@Transactional
public class TaskService {
    private TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    @RequestMapping
    public List<Task> findAll() {
        return repository.findAll();
    }

    @RequestMapping("/{id}")
    public Task findOne(@PathVariable Long id) {
        return repository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Task create(@RequestBody @Valid Task task) {
        if(task != null) {
            if(task.getId() != null) {
            }

            task = repository.save(task);
        }

        return task;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public Boolean delete(@PathVariable Long id) {
        Boolean isRemoved = false;
        if(id != null) {
            repository.delete(id);
            isRemoved = true;
        }

        return isRemoved;
    }

}