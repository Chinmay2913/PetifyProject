package com.app.dto;
import lombok.*;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Long id;
    private Long userId; // Assuming that the OrderDTO will need to reference a User
    private Set<OrderItemDTO> orderItems;
    private OrderStatus status;
    private LocalDateTime orderDate;
}

