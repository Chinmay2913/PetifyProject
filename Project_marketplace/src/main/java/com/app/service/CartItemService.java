package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.CartItem;
import com.app.repository.CartItemRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem save(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public List<CartItem> findByCartId(Long cartId) {
        return cartItemRepository.findByCartId(cartId);
    }

    public void deleteById(Long id) {
        cartItemRepository.deleteById(id);
    }

	public List<CartItem> findAll() {
		return cartItemRepository.findAll();
	}

	public Optional<CartItem> findById(Long id) {
		return cartItemRepository.findById(id);
	}
}
