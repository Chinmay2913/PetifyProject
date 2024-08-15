package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentInformationDTO {

    private Long id;
    private String razorpayPaymentId;
    private String razorpayOrderId;
    private String razorpaySignature;
}
