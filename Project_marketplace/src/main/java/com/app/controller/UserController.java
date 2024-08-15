package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.User;
import com.app.exception.ResourceNotFoundException;
import com.app.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
/*
 * login
 * signup
 * get details
 * update details
 * */
    @Autowired
    private UserService userService;

    //signup
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    
    //get details
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.findById(id);
        return user.map(ResponseEntity::ok)
                   .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
    }
    
  //login
    @PostMapping("/validate")
    public ResponseEntity<Boolean> validateUser(@RequestParam String email, @RequestParam String password) {
        boolean isValid = userService.validateUser(email, password);
        return new ResponseEntity<>(isValid, HttpStatus.OK);
    }
  
    //update details  
    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUserPartially(@PathVariable Long id, @RequestBody User userUpdates) {
        User updatedUser = userService.updateUserPartially(id, userUpdates);

        if (updatedUser == null) {
            return ResponseEntity.notFound().build(); // If user not found, return 404
        }

        return ResponseEntity.ok(updatedUser); // Return the updated user
    }
    
    //admin
    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userService.findByEmail(email);
        return user.map(ResponseEntity::ok)
                   .orElseThrow(() -> new ResourceNotFoundException("User not found with email " + email));
    }
    //admin
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
  //admin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    
}
