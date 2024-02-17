package com.razorPaymentGatway.razorPay;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RazorPayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RazorPayApplication.class, args);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer()
	{
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
			}
		};
	}

}
