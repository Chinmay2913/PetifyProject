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

import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.exception.ResourceNotFoundException;
import com.app.service.CategoryService;
import com.app.service.SubcategoryService;

@RestController
public class CategoryController {

    @Autowired
    private CategoryService CategoryService;
    
    @Autowired
    private SubcategoryService SubCategoryService;
    
    
    
 // Endpoint to fetch products by category name
    @GetMapping("/{categoryName}/products")
    public List<Product> getProductsByCategoryName(@PathVariable String categoryName) {
        // Get the category ID using the category name
        Long categoryId = CategoryService.getCategoryIdByName(categoryName);
        // Fetch all products for this category
        return SubCategoryService.getProductsByCategoryAndSubCategory(categoryId, null);
    }
    
    @PostMapping
    public ResponseEntity<Category> createcategory(@RequestBody Category category) {
    	Category savedCategory = CategoryService.save(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    
    @GetMapping("/{name}")
    public ResponseEntity<Category> getSubcategoryByName(@PathVariable String name) {
        Optional<Category> category = CategoryService.findByName(name);
        return category.map(ResponseEntity::ok)
                          .orElseThrow(() -> new ResourceNotFoundException("Category not found with name " + name));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubcategoryById(@PathVariable Long id) {
        CategoryService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
