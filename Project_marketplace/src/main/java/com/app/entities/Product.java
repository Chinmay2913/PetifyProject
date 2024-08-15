package com.app.entities;

import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private double basePrice;
    
    @Column(nullable = false)
    private double discountPrice;

    @Column(nullable = false)
    private String productname;

    @Column(nullable = false)
    private String description;

    @Lob
	private byte[] Prod_image_1;
	
	@Lob
	private byte[] Prod_image_2;
	
	@Lob
	private byte[] Prod_image_3;
	
	@Lob
	private byte[] Prod_image_4;
	
	@Lob
	private byte[] Prod_image_5;


    @ManyToOne
    @JoinColumn(name = "subcategory_id", nullable = false)
    private SubCategory subCategory;
    
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category; 
    
    private double price;
    
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Rating> ratings;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Set<Review> reviews;

	public Product(String name) {
		super();
		this.productname = name;
	}
	
	
}
