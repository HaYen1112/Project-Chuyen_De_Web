package com.example.mypkg.service.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.DeliveryCostDTO;
import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.entity.DeliveryCost;
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
		productRepository.delete(product);
		if (product != null) {
			return modelMapper.map(product, ProductDTO.class);
		}
		return null;
	}

	@Override
	public List<ProductDTO> getAllProducts() {
		if(productRepository.findAll().size()>0) {
			return productRepository.findAll().stream()
					.map(product -> modelMapper.map(product, ProductDTO.class)).collect(Collectors.toList());
		}
		return new ArrayList<>();
	}
	public List<ProductDTO> getAllProductsByName(String name) {
		return productRepository.searchProductName(name,false).stream()
				.map(product -> modelMapper.map(product, ProductDTO.class)).collect(Collectors.toList());
	}

}
