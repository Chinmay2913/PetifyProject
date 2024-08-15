package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RatingDTO {

    private Long id;
    private Long productId; // Assuming that the RatingDTO will need to reference a Product
    private Long userId; // Assuming that the RatingDTO will need to reference a User
    private int ratingValue;
}

