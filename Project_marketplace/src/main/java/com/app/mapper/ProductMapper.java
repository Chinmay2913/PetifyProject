package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.ProductDTO;
import com.app.entities.Product;

@Mapper
public interface ProductMapper {

    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    @Mapping(source = "subCategoryId", target = "subCategory.id")
    @Mapping(source = "ratings", target = "ratings")
    @Mapping(source = "reviews", target = "reviews")
    ProductDTO toDTO(Product product);

    @Mapping(source = "subCategory.id", target = "subCategoryId")
    @Mapping(source = "ratings", target = "ratings")
    @Mapping(source = "reviews", target = "reviews")
    Product toEntity(ProductDTO productDTO);
}
