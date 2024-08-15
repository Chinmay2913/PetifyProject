package com.app.dto;
import java.util.Set;

import javax.persistence.Lob;

import com.app.entities.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {

    private Long id;
    private String name;
    private double basePrice;
    private double discountPrice;
    private String description;
	private byte[] Prod_image_1;
	private byte[] Prod_image_2;
	private byte[] Prod_image_3;
	private byte[] Prod_image_4;
	private byte[] Prod_image_5;
    private Size size;
    private double price;
    private String subCategoryId;// Assuming that the ProductDTO will need to reference a SubCategory
    private String CategoryId;
    private Set<RatingDTO> ratings;
    private Set<ReviewDTO> reviews;
}
