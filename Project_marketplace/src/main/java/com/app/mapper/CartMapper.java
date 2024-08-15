package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.CartDTO;
import com.app.entities.Cart;

@Mapper
public interface CartMapper {

    CartMapper INSTANCE = Mappers.getMapper(CartMapper.class);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "cartItems", target = "cartItems")
    CartDTO toDTO(Cart cart);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "cartItems", target = "cartItems")
    Cart toEntity(CartDTO cartDTO);
}
