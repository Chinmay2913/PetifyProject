package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.RatingDTO;
import com.app.entities.Rating;

@Mapper
public interface RatingMapper {

    RatingMapper INSTANCE = Mappers.getMapper(RatingMapper.class);

    @Mapping(source = "productId", target = "product.id")
    @Mapping(source = "userId", target = "user.id")
    RatingDTO toDTO(Rating rating);

    @Mapping(source = "product.id", target = "productId")
    @Mapping(source = "user.id", target = "userId")
    Rating toEntity(RatingDTO ratingDTO);
}
