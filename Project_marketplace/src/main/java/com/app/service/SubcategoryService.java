package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Category;
import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.repository.SubcategoryRepository;

import java.util.List;
import java.util.Optional;

@Service
public class SubcategoryService {

    @Autowired
    private SubcategoryRepository subcategoryRepository;

    // Save a new subcategory or update an existing subcategory
    public SubCategory save(SubCategory subcategory) {
        return subcategoryRepository.save(subcategory);
    }

    // Find a subcategory by ID
    public Optional<SubCategory> findById(Long id) {
        return subcategoryRepository.findById(id);
    }

    // Find subcategories by category ID
    public List<SubCategory> findByCategoryId(Long categoryId) {
        return subcategoryRepository.findByCategoryId(categoryId);
  }
  
    public List<Product> getProductsBySubCategoryId(Long subCategoryId) {
        return subcategoryRepository.findProductsById(subCategoryId);
    }  
    
    
    
 // Method to get SubCategory ID by subcategory name
    public Long getSubCategoryIdByName(String subCategoryName) {
        SubCategory subCategory = subcategoryRepository.findByName(subCategoryName)
                .orElseThrow(() -> new RuntimeException("SubCategory not found"));
        return subCategory.getId();
    }

    // Method to get Products by Category ID and SubCategory ID
    public List<Product> getProductsByCategoryAndSubCategory(Long categoryId, Long subCategoryId) {
        return subcategoryRepository.findProductsByCategoryIdAndSubCategoryId(categoryId, subCategoryId);
    }

    // Find all subcategories
    public List<SubCategory> findAll() {
        return subcategoryRepository.findAll();
    }

    // Find a subcategory by name
    public Optional<SubCategory> findByName(String name) {
        return subcategoryRepository.findByName(name);
    }

    // Delete a subcategory by ID
    public void deleteById(Long id) {
        subcategoryRepository.deleteById(id);
    }

	
}
