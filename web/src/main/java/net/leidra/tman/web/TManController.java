package net.leidra.tman.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by afuentes on 12/03/16.
 */
@Controller
public class TManController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
