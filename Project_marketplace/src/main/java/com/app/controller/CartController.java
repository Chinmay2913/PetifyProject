package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.Cart;
import com.app.exception.*;
import com.app.service.CartService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    //create a cart based on product
    @PostMapping
    public ResponseEntity<Cart> createCart(@RequestBody Cart cart) {
        Cart savedCart = cartService.save(cart);
        return new ResponseEntity<>(savedCart, HttpStatus.CREATED);
    }

    
//    @GetMapping("/{id}")
//    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
//        Optional<Cart> cart = cartService.findById(id);
//        return cart.map(ResponseEntity::ok)
//                   .orElseThrow(() -> new ResourceNotFoundException("Cart not found with id " + id));
//    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Cart> getCartByUser(@PathVariable Long userId) {
        Cart cart = cartService.findByUserId(userId)
                               .orElseThrow(() -> new ResourceNotFoundException("Empty Cart for given user " + userId));
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Cart>> getAllCarts() {
        List<Cart> carts = cartService.findAll();
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartById(@PathVariable Long id) {
        cartService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
