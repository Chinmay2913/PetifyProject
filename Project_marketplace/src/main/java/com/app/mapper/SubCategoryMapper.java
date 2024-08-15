package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.SubCategoryDTO;
import com.app.entities.SubCategory;

@Mapper
public interface SubCategoryMapper {

    SubCategoryMapper INSTANCE = Mappers.getMapper(SubCategoryMapper.class);

    @Mapping(source = "categoryId", target = "category.id")
    @Mapping(source = "products", target = "products")
    SubCategoryDTO toDTO(SubCategory subCategory);

    @Mapping(source = "category.id", target = "categoryId")
    @Mapping(source = "products", target = "products")
    SubCategory toEntity(SubCategoryDTO subCategoryDTO);
}
