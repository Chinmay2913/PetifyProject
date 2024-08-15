package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Category;
import com.app.repository.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    public Optional<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }
 
    
    
    
 // Method to get Category ID by category name
    public Long getCategoryIdByName(String categoryName) {
        Category category = categoryRepository.findByName(categoryName)
                .orElseThrow(() -> new RuntimeException("Category not found"));
        return category.getId();
    }
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }

	
}
