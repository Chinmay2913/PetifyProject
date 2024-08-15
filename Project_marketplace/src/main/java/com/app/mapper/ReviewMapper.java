package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.ReviewDTO;
import com.app.entities.Review;

@Mapper
public interface ReviewMapper {

    ReviewMapper INSTANCE = Mappers.getMapper(ReviewMapper.class);

    @Mapping(source = "productId", target = "product.id")
    @Mapping(source = "userId", target = "user.id")
    ReviewDTO toDTO(Review review);

    @Mapping(source = "product.id", target = "productId")
    @Mapping(source = "user.id", target = "userId")
    Review toEntity(ReviewDTO reviewDTO);
}
