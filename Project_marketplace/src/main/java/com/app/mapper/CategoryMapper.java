package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.CategoryDTO;
import com.app.entities.Category;

@Mapper
public interface CategoryMapper {

    CategoryMapper INSTANCE = Mappers.getMapper(CategoryMapper.class);

    @Mapping(source = "subCategories", target = "subCategories")
    CategoryDTO toDTO(Category category);

    @Mapping(source = "subCategories", target = "subCategories")
    Category toEntity(CategoryDTO categoryDTO);
}
