package com.app.dto;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {

    private Long id;
    private Long orderId; // Assuming that the PaymentDTO will need to reference an Order
    private double amount;
    private Long paymentInformationId; // Assuming that the PaymentDTO will need to reference PaymentInformation
    private LocalDateTime paymentDate;
}
