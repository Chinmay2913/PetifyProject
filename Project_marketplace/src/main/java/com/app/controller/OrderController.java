package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Order;
import com.app.entities.OrderStatus;
import com.app.entities.User;
import com.app.exception.ResourceNotFoundException;
import com.app.service.OrderService;
import com.app.service.UserService;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    
    @Autowired
    private UserService userService;
    
    //retrive order for logged in user
    @GetMapping
    public List<Order> getOrders(@AuthenticationPrincipal User user) {
        return orderService.getOrdersForUser(Optional.ofNullable(user));
    }
    
    //once order is placed by logged in user
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order savedOrder = orderService.save(order);
        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    //admin
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.findById(id);
        return order.map(ResponseEntity::ok)
                    .orElseThrow(() -> new ResourceNotFoundException("Order not found with id " + id));
    }

  //admin
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Long userId) {
        List<Order> orders = orderService.findByUserId(userId);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

  //admin
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Order>> getOrdersByStatus(@PathVariable OrderStatus status) {
        List<Order> orders = orderService.findByStatus(status);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    
  //update order
    @PutMapping("/{userId}/orders/{orderId}/status")
    public ResponseEntity<String> updateOrderStatus(
            @PathVariable Long userId,
            @PathVariable Long orderId,
            @RequestParam OrderStatus status) {

        // Optional: Validate that the user has access to the order (if needed)
        User user = userService.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Update the order status
        orderService.updateOrderStatus(orderId, status);
        
        return ResponseEntity.ok("Order status updated successfully");
    }

}
