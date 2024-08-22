package com.zosh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zosh.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
