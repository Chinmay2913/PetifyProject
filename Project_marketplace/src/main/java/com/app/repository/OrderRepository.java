package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Order;
import com.app.entities.OrderStatus;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	 List<Order> findByUserId(Long userId);
    List<Order> findByStatus(OrderStatus status);
    
}
