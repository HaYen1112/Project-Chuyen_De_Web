package com.example.mypkg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.ProductBillDTO;
import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.entity.ProductBill;
import com.example.mypkg.service.ProductBillService;

@RestController
@RequestMapping(value = "/productbill")
@CrossOrigin(origins = "*")
public class ProductBillController {
	@Autowired
	private ProductBillService productBillService;
	
	@GetMapping("/get-all-productbill")
	public ResponseEntity<?> getAllProducts() {
		List<ProductBill> result = productBillService.getAllProductBills();
		return ResponseEntity.ok(result);
	}

}
