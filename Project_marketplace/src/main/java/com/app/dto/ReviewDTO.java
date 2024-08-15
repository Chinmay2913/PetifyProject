package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDTO {

    private Long id;
    private Long productId; // Assuming that the ReviewDTO will need to reference a Product
    private Long userId; // Assuming that the ReviewDTO will need to reference a User
    private String reviewText;
}
