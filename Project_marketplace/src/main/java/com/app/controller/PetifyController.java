package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.exception.ResourceNotFoundException;
import com.app.service.CategoryService;
import com.app.service.SubcategoryService;


	@RestController
	@RequestMapping("/petify")
	public class PetifyController {

	    @GetMapping("/")
	    public ResponseEntity<String> getWelcomeMessage() {
	        return ResponseEntity.ok("Welcome to Petify!");
	    }
	}
