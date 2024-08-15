package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.PaymentInformation;
import com.app.exception.ResourceNotFoundException;
import com.app.service.PaymentInformationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paymentinformations")
public class PaymentInformationController {

    @Autowired
    private PaymentInformationService paymentInformationService;

    @PostMapping
    public ResponseEntity<PaymentInformation> createPaymentInformation(@RequestBody PaymentInformation paymentInformation) {
        PaymentInformation savedPaymentInformation = paymentInformationService.save(paymentInformation);
        return new ResponseEntity<>(savedPaymentInformation, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentInformation> getPaymentInformationById(@PathVariable Long id) {
        Optional<PaymentInformation> paymentInformation = paymentInformationService.findById(id);
        return paymentInformation.map(ResponseEntity::ok)
                                 .orElseThrow(() -> new ResourceNotFoundException("PaymentInformation not found with id " + id));
    }

    @GetMapping("/payment/{paymentId}")
    public ResponseEntity<PaymentInformation> getPaymentInformationByPayment(@PathVariable Long paymentId) {
        PaymentInformation paymentInformation = paymentInformationService.findByPaymentId(paymentId)
                                                                        .orElseThrow(() -> new ResourceNotFoundException("PaymentInformation not found for payment id " + paymentId));
        return new ResponseEntity<>(paymentInformation, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PaymentInformation>> getAllPaymentInformations() {
        List<PaymentInformation> paymentInformations = paymentInformationService.findAll();
        return new ResponseEntity<>(paymentInformations, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaymentInformationById(@PathVariable Long id) {
        paymentInformationService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
