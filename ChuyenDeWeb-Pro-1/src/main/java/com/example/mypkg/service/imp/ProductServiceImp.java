package com.example.mypkg.service.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.entity.Product;
import com.example.mypkg.repository.ProductRepository;
import com.example.mypkg.service.ProductService;
import com.example.mypkg.until.ProductType;

@Service
public class ProductServiceImp implements ProductService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<ProductDTO> getAllProductsByProductType(String productType) {
		ProductType productTypeEnum = ProductType.formString(productType);
		if (productTypeEnum != null) {
			return productRepository.findByProductTypeAndIsDelete(productTypeEnum, false).stream()
					.map(product -> modelMapper.map(product, ProductDTO.class)).collect(Collectors.toList());
		}
		return new ArrayList<>();
	}

	@Override
	public ProductDTO getProductById(Long productId) {
		Product product = productRepository.findByIdAndIsDelete(productId, false).get();
		if (product != null) {
			return modelMapper.map(product, ProductDTO.class);
		}
		return null;
	}

	


	
	

	
}
