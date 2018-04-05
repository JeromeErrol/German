package com.jeromesaltmarsh.german.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    @PostMapping("/example")
    public void example(){
        throw new ExampleException();
    }
}
