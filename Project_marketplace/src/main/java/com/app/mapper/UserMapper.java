package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.UserDTO;
import com.app.entities.User;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(source = "role", target = "role")
    UserDTO toDTO(User user);

    @Mapping(source = "role", target = "role")
    User toEntity(UserDTO userDTO);
}

