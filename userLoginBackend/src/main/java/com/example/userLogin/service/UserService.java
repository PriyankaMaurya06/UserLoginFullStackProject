package com.example.userLogin.service;

import com.example.userLogin.entity.User;
import com.example.userLogin.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Signup method
    public ResponseEntity<String> signUp(User user) {
        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            return new ResponseEntity<>("Username already taken!", HttpStatus.BAD_REQUEST);
        }

        userRepository.save(user);
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }

    // Method for logging in a user
    public ResponseEntity<String> login(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return new ResponseEntity<>("Login successful!", HttpStatus.OK);
        }
        return new ResponseEntity<>("Invalid username or password", HttpStatus.UNAUTHORIZED);
    }

}
