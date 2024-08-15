package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Payment;
import com.app.repository.PaymentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment save(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Optional<Payment> findByOrderId(Long orderId) {
        return paymentRepository.findByOrderId(orderId);
    }

    public void deleteById(Long id) {
        paymentRepository.deleteById(id);
    }

	public Optional<Payment> findById(Long id) {
		return paymentRepository.findById(id);
	}

	public List<Payment> findAll() {
		return paymentRepository.findAll();
	}
}
