package com.springtutorial.beeclassy.controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/user")
@RestController
public class UserController {

    @GetMapping("admin")
    public String getAdmin(){
        return "<h2>Hello Admin</h2>";
    }
    @GetMapping("user")
    public String getUser(){
        return "<h2>Hello User</h2>";
    }





}
