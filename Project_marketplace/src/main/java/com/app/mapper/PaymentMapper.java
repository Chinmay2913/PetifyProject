package com.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.app.dto.PaymentDTO;
import com.app.entities.Payment;

@Mapper
public interface PaymentMapper {

    PaymentMapper INSTANCE = Mappers.getMapper(PaymentMapper.class);

    @Mapping(source = "orderId", target = "order.id")
    @Mapping(source = "paymentInformationId", target = "paymentInformation.id")
    PaymentDTO toDTO(Payment payment);

    @Mapping(source = "order.id", target = "orderId")
    @Mapping(source = "paymentInformation.id", target = "paymentInformationId")
    Payment toEntity(PaymentDTO paymentDTO);
}
