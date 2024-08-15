package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.app.dto.AddressDTO;
import com.app.entities.Address;

@Mapper
public interface AddressMapper {

    AddressMapper INSTANCE = Mappers.getMapper(AddressMapper.class);

    AddressDTO toDTO(Address address);

    Address toEntity(AddressDTO addressDTO);
}
