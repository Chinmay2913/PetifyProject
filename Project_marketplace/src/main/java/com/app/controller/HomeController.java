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
@CrossOrigin(origins = "http://localhost:8080")
public class HomeController {

    @Autowired
    private CategoryService CategoryService;

    @Autowired
    private SubcategoryService SubCategoryService;
    
 // Get all products for a specific category and subcategory by categoryName and subCategoryName
    @GetMapping("/{categoryName}/{subCategoryName}/products")
    public ResponseEntity<List<Product>> getProductsByCategoryAndSubCategory(
            @PathVariable String categoryName,
            @PathVariable String subCategoryName) {
        
        // Assuming you have methods in your service to find by name
        Long categoryId = CategoryService.getCategoryIdByName(categoryName);
        Long subCategoryId = SubCategoryService.getSubCategoryIdByName(subCategoryName);

        // Retrieve products based on both category and subcategory
        List<Product> products = SubCategoryService.getProductsByCategoryAndSubCategory(categoryId, subCategoryId);
        return ResponseEntity.ok(products);
    }
    
  //search by subcategory
    @GetMapping("/{subCategoryName}/products")
    public List<Product> getProductsBySubCategoryName(@PathVariable String subCategoryName) {
        // Get the subcategory ID using the subcategory name
        Long subCategoryId = SubCategoryService.getSubCategoryIdByName(subCategoryName);
        // Fetch all products for this subcategory
        return SubCategoryService.getProductsBySubCategoryId(subCategoryId);
    }
    
  // Endpoint to fetch products by category name
        @GetMapping("/{categoryName}/products")
        public List<Product> getProductsByCategoryName(@PathVariable String categoryName) {
            // Get the category ID using the category name
            Long categoryId = CategoryService.getCategoryIdByName(categoryName);
            // Fetch all products for this category
            return SubCategoryService.getProductsByCategoryAndSubCategory(categoryId, null);
        }
              

        
//  @PostMapping
//  public ResponseEntity<Category> createcategory(@RequestBody Category category) {
//  	Category savedCategory = CategoryService.save(category);
//      return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
//  }
//      
    
//    @GetMapping("/{name}")
//    public ResponseEntity<Category> getSubcategoryByName(@PathVariable String name) {
//        Optional<Category> category = CategoryService.findByName(name);
//        return category.map(ResponseEntity::ok)
//                          .orElseThrow(() -> new ResourceNotFoundException("Category not found with name " + name));
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteSubcategoryById(@PathVariable Long id) {
//        CategoryService.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }
}
