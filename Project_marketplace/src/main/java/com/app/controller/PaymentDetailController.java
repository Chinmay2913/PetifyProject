package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.PaymentDetails;
import com.app.exception.ResourceNotFoundException;
import com.app.service.PaymentDetailsService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paymentdetails")
public class PaymentDetailController {

    @Autowired
    private PaymentDetailsService paymentDetailService;

    @PostMapping
    public ResponseEntity<PaymentDetails> createPaymentDetail(@RequestBody PaymentDetails paymentDetail) {
    	PaymentDetails savedPaymentDetail = paymentDetailService.save(paymentDetail);
        return new ResponseEntity<>(savedPaymentDetail, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentDetails> getPaymentDetailById(@PathVariable Long id) {
        Optional<PaymentDetails> paymentDetail = paymentDetailService.findById(id);
        return paymentDetail.map(ResponseEntity::ok)
                            .orElseThrow(() -> new ResourceNotFoundException("PaymentDetail not found with id " + id));
    }

    @GetMapping("/payment/{paymentId}")
    public ResponseEntity<PaymentDetails> getPaymentDetailByPayment(@PathVariable Long paymentId) {
    	PaymentDetails paymentDetail = paymentDetailService.findByPaymentId(paymentId)
                                                          .orElseThrow(() -> new ResourceNotFoundException("PaymentDetail not found for payment id " + paymentId));
        return new ResponseEntity<>(paymentDetail, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PaymentDetails>> getAllPaymentDetails() {
        List<PaymentDetails> paymentDetails = paymentDetailService.findAll();
        return new ResponseEntity<>(paymentDetails, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaymentDetailById(@PathVariable Long id) {
        paymentDetailService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
