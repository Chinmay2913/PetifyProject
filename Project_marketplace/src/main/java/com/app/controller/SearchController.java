package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.SearchService;

@RestController
public class SearchController {
   
    @Autowired
    private SearchService searchService;

    // Endpoint for searching products by category, subcategory, or product name
    @GetMapping("/search")
    public List<Product> searchProducts(
            @RequestParam(required = false) String categoryName,
            @RequestParam(required = false) String subCategoryName,
            @RequestParam(required = false) String productName) {

        return searchService.searchProducts(categoryName, subCategoryName, productName);
    }
    
}
