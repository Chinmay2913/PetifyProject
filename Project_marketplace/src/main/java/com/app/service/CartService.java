package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Cart;
import com.app.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart save(Cart cart) {
        return cartRepository.save(cart);
    }

    public Optional<Cart> findByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void deleteById(Long id) {
        cartRepository.deleteById(id);
    }

	public List<Cart> findAll() {
		return cartRepository.findAll();
		 
	}

	public Optional<Cart> findById(Long id) {		
		return cartRepository.findById(id);
	}
}
