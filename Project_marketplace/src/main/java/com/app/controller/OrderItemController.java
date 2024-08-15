package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.OrderItem;
import com.app.exception.ResourceNotFoundException;
import com.app.service.OrderItemService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orderitems")
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

    @PostMapping
    public ResponseEntity<OrderItem> createOrderItem(@RequestBody OrderItem orderItem) {
        OrderItem savedOrderItem = orderItemService.save(orderItem);
        return new ResponseEntity<>(savedOrderItem, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItem> getOrderItemById(@PathVariable Long id) {
        Optional<OrderItem> orderItem = orderItemService.findById(id);
        return orderItem.map(ResponseEntity::ok)
                        .orElseThrow(() -> new ResourceNotFoundException("OrderItem not found with id " + id));
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<OrderItem>> getOrderItemsByOrder(@PathVariable Long orderId) {
        List<OrderItem> orderItems = orderItemService.findByOrderId(orderId);
        return new ResponseEntity<>(orderItems, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<OrderItem>> getAllOrderItems() {
        List<OrderItem> orderItems = orderItemService.findAll();
        return new ResponseEntity<>(orderItems, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderItemById(@PathVariable Long id) {
        orderItemService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
