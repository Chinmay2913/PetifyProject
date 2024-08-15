package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.OrderDTO;
import com.app.entities.Order;

@Mapper
public interface OrderMapper {

    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "orderItems", target = "orderItems")
    OrderDTO toDTO(Order order);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "orderItems", target = "orderItems")
    Order toEntity(OrderDTO orderDTO);
}
