package com.razorPaymentGatway.razorPay.Razorpay;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

    String customerName;
    String email;
    String phoneNumber;
    BigInteger amount;

}
