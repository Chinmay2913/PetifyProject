package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.PaymentInformation;

import java.util.Optional;

@Repository
public interface PaymentInformationRepository extends JpaRepository<PaymentInformation, Long> {
    Optional<PaymentInformation> findByPaymentId(Long paymentId);
}
