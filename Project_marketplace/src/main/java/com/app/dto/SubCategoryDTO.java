package com.app.dto;

import lombok.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubCategoryDTO {

    private Long id;
    private String name;
    private Long categoryId; // Assuming that the SubCategoryDTO will need to reference a Category
    private Set<ProductDTO> products;
}

