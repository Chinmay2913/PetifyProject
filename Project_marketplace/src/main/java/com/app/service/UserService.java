package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.User;
import com.app.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Save a new user or update an existing user
    public User save(User user) {
        return userRepository.save(user);
    }

    // Find a user by ID
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public User updateUserPartially(Long id, User userUpdates) {
        Optional<User> existingUserOptional = userRepository.findById(id);

        if (!existingUserOptional.isPresent()) {
            return null; // Return null if user is not found
        }

        User existingUser = existingUserOptional.get();

        // Update only the fields that are present in the request body
        if (userUpdates.getUsername() != null) {
            existingUser.setUsername(userUpdates.getUsername());
        }

        if (userUpdates.getPassword() != null) {
            existingUser.setPassword(userUpdates.getPassword());
        }

        if (userUpdates.getEmail() != null) {
            existingUser.setEmail(userUpdates.getEmail());
        }

        if (userUpdates.getRole() != null) {
            existingUser.setRole(userUpdates.getRole());
        }

        if (userUpdates.getAddresses() != null) {
            existingUser.setAddresses(userUpdates.getAddresses());
        }

        // Save the updated user and return it
        return userRepository.save(existingUser);
    }

    
    
    // Find a user by email
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // Find all users
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // Delete a user by ID
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
    
    // Validate user credentials
    public boolean validateUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}
