package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.exception.ResourceNotFoundException;
import com.app.service.SubcategoryService;

@RestController
@RequestMapping("/subcategories")
public class SubcategoryController {

    @Autowired
    private SubcategoryService subcategoryService;

    @PostMapping
    public ResponseEntity<SubCategory> createSubcategory(@RequestBody SubCategory subcategory) {
    	SubCategory savedSubcategory = subcategoryService.save(subcategory);
        return new ResponseEntity<>(savedSubcategory, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCategory> getSubcategoryById(@PathVariable Long id) {
        Optional<SubCategory> subcategory = subcategoryService.findById(id);
        return subcategory.map(ResponseEntity::ok)
                          .orElseThrow(() -> new ResourceNotFoundException("Subcategory not found with id " + id));
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<SubCategory>> getSubcategoriesByCategory(@PathVariable Long categoryId) {
        List<SubCategory> subcategories = subcategoryService.findByCategoryId(categoryId);
        return new ResponseEntity<>(subcategories, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<SubCategory>> getAllSubcategories() {
        List<SubCategory> subcategories = subcategoryService.findAll();
        return new ResponseEntity<>(subcategories, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<SubCategory> getSubcategoryByName(@PathVariable String name) {
        Optional<SubCategory> subcategory = subcategoryService.findByName(name);
        return subcategory.map(ResponseEntity::ok)
                          .orElseThrow(() -> new ResourceNotFoundException("Subcategory not found with name " + name));
    }
    //search by subcategory
    @GetMapping("/{subCategoryName}/products")
    public List<Product> getProductsBySubCategoryName(@PathVariable String subCategoryName) {
        // Get the subcategory ID using the subcategory name
        Long subCategoryId = subcategoryService.getSubCategoryIdByName(subCategoryName);
        // Fetch all products for this subcategory
        return subcategoryService.getProductsBySubCategoryId(subCategoryId);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubcategoryById(@PathVariable Long id) {
        subcategoryService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
