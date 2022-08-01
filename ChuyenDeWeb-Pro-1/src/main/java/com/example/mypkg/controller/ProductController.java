package com.example.mypkg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.service.ProductService;

@RestController()
@RequestMapping(value = "/product")
@CrossOrigin(origins = "*")
public class ProductController {
	@Autowired
	private ProductService productService;
// hiển thị danh sách sản phẩm theo type
	@GetMapping("/get-all-by-product-type/{type}")
	public ResponseEntity<?> getAllProductsByProductType(@PathVariable("type") String productType) {
		List<ProductDTO> result = productService.getAllProductsByProductType(productType);
		return ResponseEntity.ok(result);
	}

	@GetMapping("/get-product-by-id/{productId}")
	public ResponseEntity<?> getProductById(@PathVariable("productId") Long productId) {
		ProductDTO result = productService.getProductById(productId);
		return ResponseEntity.ok(result);
	}
}
