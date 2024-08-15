package com.app.entities;

import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payment_information")
public class PaymentInformation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String razorpayPaymentId;
    private String razorpayOrderId;
    private String razorpaySignature;

    @OneToOne(mappedBy = "paymentInformation")
    private Payment payment;

    @OneToOne(mappedBy = "paymentInformation")
    private PaymentDetails paymentDetails;
}

