package net.leidra.tman.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by afuentes on 12/03/16.
 */
@Controller
public class TManController {

    @RequestMapping("/tasks")
    public String hello(@RequestParam(value="name", required = false, defaultValue = "World") String name, Model model) {
        model.addAttribute("name", name);

        return "index";
    }
}
