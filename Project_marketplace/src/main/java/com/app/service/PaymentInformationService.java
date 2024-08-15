package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.PaymentInformation;
import com.app.repository.PaymentInformationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentInformationService {

    @Autowired
    private PaymentInformationRepository paymentInformationRepository;

    public PaymentInformation save(PaymentInformation paymentInformation) {
        return paymentInformationRepository.save(paymentInformation);
    }

    public Optional<PaymentInformation> findByPaymentId(Long paymentId) {
        return paymentInformationRepository.findByPaymentId(paymentId);
    }

    public void deleteById(Long id) {
        paymentInformationRepository.deleteById(id);
    }

	public Optional<PaymentInformation> findById(Long id) {
		return paymentInformationRepository.findById(id);
	}

	public List<PaymentInformation> findAll() {
		return paymentInformationRepository.findAll();
	}
}
