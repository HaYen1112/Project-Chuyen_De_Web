package com.example.mypkg.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.entity.Product;

public interface ProductService {
	public List<ProductDTO> getAllProductsByProductType(String productType);

	public ProductDTO getProductById(Long productId);
	
	

}
