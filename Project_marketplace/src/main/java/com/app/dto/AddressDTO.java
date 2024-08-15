package com.app.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {

    private Long id;
    private String street;
    private String city;
    private String state;
    private String country;
    private String zipCode;
    private Long userId; // Assuming that the AddressDTO will need to reference a User
}

