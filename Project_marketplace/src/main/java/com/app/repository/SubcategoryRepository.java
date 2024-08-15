package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.entities.Product;
import com.app.entities.SubCategory;


@Repository
public interface SubcategoryRepository extends JpaRepository<SubCategory, Long> {
    List<SubCategory> findByCategoryId(Long categoryId);
    Optional<SubCategory> findByName(String name);
    @Query("SELECT p FROM Product p WHERE p.subCategory.id = :subCategoryId AND p.subCategory.category.id = :categoryId")
    List<Product> findProductsByCategoryIdAndSubCategoryId(@Param("categoryId") Long categoryId, @Param("subCategoryId") Long subCategoryId);

 // Find products by subcategory ID
    List<Product> findProductsById(Long subCategoryId);
}
