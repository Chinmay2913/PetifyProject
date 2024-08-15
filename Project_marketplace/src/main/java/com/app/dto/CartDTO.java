package com.app.dto;

import lombok.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {

    private Long id;
    private Long userId; // Assuming that the CartDTO will need to reference a User
    private Set<CartItemDTO> cartItems;
}
