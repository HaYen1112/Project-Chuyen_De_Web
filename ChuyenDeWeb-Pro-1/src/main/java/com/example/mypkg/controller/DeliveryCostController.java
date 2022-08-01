package com.example.mypkg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.DeliveryCostDTO;
import com.example.mypkg.service.DeliveryCostService;

@RestController
@RequestMapping(value = "/delivery-cost")
@CrossOrigin(origins = "*")
public class DeliveryCostController {
	@Autowired
	private DeliveryCostService deliveryCostService;

	@GetMapping("/get-delivery-cost")
	public ResponseEntity<?> getDeliveryCost() {
		DeliveryCostDTO result = deliveryCostService.getDeliveryCost();
		return ResponseEntity.ok(result);
	}
}
