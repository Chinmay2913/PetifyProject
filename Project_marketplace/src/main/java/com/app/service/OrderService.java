package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.entities.User;
import com.app.exception.UnauthorizedException;
import com.app.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order save(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> findByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public  List<Order> findByStatus(OrderStatus status) {
        return orderRepository.findByStatus(status);
    }
    
    public List<Order> getOrdersForUser(Optional<User> user) {
        if (user.isPresent()) {
            return orderRepository.findByUserId(user.get().getId());
        } else {
            throw new UnauthorizedException("No orders available. Please log in.");
        }
    }

    public void deleteById(Long id) {
        orderRepository.deleteById(id);
    }

	public Optional<Order> findById(Long id) {
		return orderRepository.findById(id);
	}

	public List<Order> findAll() {
		return orderRepository.findAll();
	}

    public void updateOrderStatus(Long orderId, OrderStatus status) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setStatus(status);
        orderRepository.save(order);
    }
}
