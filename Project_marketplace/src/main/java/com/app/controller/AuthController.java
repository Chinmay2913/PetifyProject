package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.User;
import com.app.exception.BadRequestException;
import com.app.security.JwtUtil;
import com.app.service.CustomUserDetailsService;

@RestController
@RequestMapping("/petify/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        try {
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
            
            // Generate JWT token
            String jwtToken = jwtUtil.generateToken(user.getUsername());
            
            // Return JWT token in response
            return ResponseEntity.ok(new JwtResponse(jwtToken));
        } catch (AuthenticationException e) {
            // Throw custom exception if authentication fails
            throw new BadRequestException("Invalid username or password");
        }
    }
}
