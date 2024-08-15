package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.OrderItem;
import com.app.repository.OrderItemRepository;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    public OrderItem save(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public List<OrderItem> findByOrderId(Long orderId) {
        return orderItemRepository.findByOrderId(orderId);
    }

    public void deleteById(Long id) {
        orderItemRepository.deleteById(id);
    }

	public Optional<OrderItem> findById(Long id) {
		return orderItemRepository.findById(id);
	}

	public List<OrderItem> findAll() {
		return orderItemRepository.findAll();
	}
}
