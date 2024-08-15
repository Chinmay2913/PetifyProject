package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {

    private Long id;
    private Long cartId; // Assuming that the CartItemDTO will need to reference a Cart
    private Long productId; // Assuming that the CartItemDTO will need to reference a Product
    private int quantity;
    private double price;
}
