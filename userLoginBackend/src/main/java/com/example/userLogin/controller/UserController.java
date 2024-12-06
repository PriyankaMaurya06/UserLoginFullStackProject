package com.example.userLogin.controller;

import com.example.userLogin.entity.User;
import com.example.userLogin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/userlogin")
@CrossOrigin(origins = "http://localhost:4200/signup")
public class UserController {

    @Autowired
    private UserService userService;

    // Endpoint for user signup

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        return userService.signUp(user);
    }

    // Endpoint for user login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        return userService.login(user.getUsername(), user.getPassword());
    }
}
