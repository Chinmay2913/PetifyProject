package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.PaymentDetails;
import com.app.repository.PaymentDetailsRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentDetailsService {

    @Autowired
    private PaymentDetailsRepository paymentDetailsRepository;

    public PaymentDetails save(PaymentDetails paymentDetails) {
        return paymentDetailsRepository.save(paymentDetails);
    }

    public Optional<PaymentDetails> findByPaymentId(Long paymentId) {
        return paymentDetailsRepository.findByPaymentId(paymentId);
    }

    public void deleteById(Long id) {
        paymentDetailsRepository.deleteById(id);
    }

	public Optional<PaymentDetails> findById(Long id) {
		return paymentDetailsRepository.findById(id);
	}

	public List<PaymentDetails> findAll() {
		return paymentDetailsRepository.findAll();
	}
}
