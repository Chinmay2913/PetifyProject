package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.CartItem;
import com.app.exception.ResourceNotFoundException;
import com.app.service.CartItemService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/petify/cartitems")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping
    public ResponseEntity<CartItem> createCartItem(@RequestBody CartItem cartItem) {
        CartItem savedCartItem = cartItemService.save(cartItem);
        return new ResponseEntity<>(savedCartItem, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CartItem> getCartItemById(@PathVariable Long id) {
        Optional<CartItem> cartItem = cartItemService.findById(id);
        return cartItem.map(ResponseEntity::ok)
                       .orElseThrow(() -> new ResourceNotFoundException("CartItem not found with id " + id));
    }

    @GetMapping("/cart/{cartId}")
    public ResponseEntity<List<CartItem>> getCartItemsByCart(@PathVariable Long cartId) {
        List<CartItem> cartItems = cartItemService.findByCartId(cartId);
        return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<CartItem>> getAllCartItems() {
        List<CartItem> cartItems = cartItemService.findAll();
        return new ResponseEntity<>(cartItems, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCartItemById(@PathVariable Long id) {
        cartItemService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
