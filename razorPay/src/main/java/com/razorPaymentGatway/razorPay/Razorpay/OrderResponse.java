package com.razorPaymentGatway.razorPay.Razorpay;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    String secretKey;
    String razorpayOrderId;
    String applicationFee;
    String secretId;
    String pgName;

}
