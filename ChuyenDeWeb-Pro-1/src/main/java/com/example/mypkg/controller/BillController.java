package com.example.mypkg.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.ResponseObject;
import com.example.mypkg.service.BillService;
import com.example.mypkg.until.Message;

@RestController
@RequestMapping(value = "/bill")
@CrossOrigin(origins = "*")
public class BillController {
	@Autowired
	private BillService billService;

	@PostMapping("/payment")
	public ResponseEntity<ResponseObject> paymentBill(@RequestBody Map<String, Object> params) {
		@SuppressWarnings("unchecked")
		Map<Long, Integer> products = (Map<Long, Integer>) params.get("products");
		String address = (String) params.get("address");
		int deliveryCostId = (int) params.get("deliveryCostId");
		boolean isPayment = billService.paymentBill(products, address, Long.valueOf(deliveryCostId));
		if (isPayment) {
			return ResponseEntity
					.ok(new ResponseObject(String.valueOf(HttpStatus.OK), Message.MS_PAYMENT_SUCCEED.get(), true));
		}
		return ResponseEntity.ok(new ResponseObject(String.valueOf(HttpStatus.EXPECTATION_FAILED),
				Message.MS_PAYMENT_FAILED.get(), false));
	}
}
