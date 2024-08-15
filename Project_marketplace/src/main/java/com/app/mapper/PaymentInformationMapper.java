package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.app.dto.PaymentInformationDTO;
import com.app.entities.PaymentInformation;

@Mapper
public interface PaymentInformationMapper {

    PaymentInformationMapper INSTANCE = Mappers.getMapper(PaymentInformationMapper.class);

    PaymentInformationDTO toDTO(PaymentInformation paymentInformation);

    PaymentInformation toEntity(PaymentInformationDTO paymentInformationDTO);
}
