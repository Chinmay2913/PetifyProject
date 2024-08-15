package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.PaymentDetailsDTO;
import com.app.entities.PaymentDetails;

@Mapper
public interface PaymentDetailsMapper {

    PaymentDetailsMapper INSTANCE = Mappers.getMapper(PaymentDetailsMapper.class);

    @Mapping(source = "paymentId", target = "payment.id")
    PaymentDetailsDTO toDTO(PaymentDetails paymentDetails);

    @Mapping(source = "payment.id", target = "paymentId")
    PaymentDetails toEntity(PaymentDetailsDTO paymentDetailsDTO);
}
