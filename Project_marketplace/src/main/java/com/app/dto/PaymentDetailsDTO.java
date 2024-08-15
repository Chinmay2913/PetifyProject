package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetailsDTO {

    private Long id;
    private Long paymentId; // Assuming that the PaymentDetailsDTO will need to reference a Payment
    private String cardNumber;
    private String cardHolderName;
    private String cardExpiryDate;
    private String cardCvc;
}

