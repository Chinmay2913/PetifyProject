package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.CartItemDTO;
import com.app.entities.CartItem;

@Mapper
public interface CartItemMapper {

    CartItemMapper INSTANCE = Mappers.getMapper(CartItemMapper.class);

    @Mapping(source = "cartId", target = "cart.id")
    @Mapping(source = "productId", target = "product.id")
    CartItemDTO toDTO(CartItem cartItem);

    @Mapping(source = "cart.id", target = "cartId")
    @Mapping(source = "product.id", target = "productId")
    CartItem toEntity(CartItemDTO cartItemDTO);
}
