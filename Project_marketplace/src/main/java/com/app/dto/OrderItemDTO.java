package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {

    private Long id;
    private Long orderId; // Assuming that the OrderItemDTO will need to reference an Order
    private Long productId; // Assuming that the OrderItemDTO will need to reference a Product
    private int quantity;
    private double price;
}
