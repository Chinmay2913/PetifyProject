package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Product;
import com.app.repository.ProductRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public List<Product> findBySubcategoryId(Long subcategoryId) {
        return productRepository.findBySubCategoryId(subcategoryId);
    }

    public List<Product> findByNameContaining(String name) {
        return productRepository.findByProductnameContaining(name);
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    
    public List<Product> findAll() {
        return productRepository.findAll();
    }
    
    
 // Method to get base price of a product
    public double getBasePrice(Long productId) {
        return productRepository.findById(productId)
                .map(Product::getBasePrice)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    // Method to get derived price of a product
    public double getDerivedPrice(Long productId) {
        return productRepository.findById(productId)
                .map(Product::getDiscountPrice)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }
    

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
    
    public List<Product> filterProducts(String categoryName, String subCategoryName, Double minPrice, Double maxPrice) {
        return productRepository.findProductsByCategorySubCategoryAndPrice(categoryName, subCategoryName, minPrice, maxPrice);
    }
    
    
    
    
    
}
