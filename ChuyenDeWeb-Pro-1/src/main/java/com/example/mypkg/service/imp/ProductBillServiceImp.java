package com.example.mypkg.service.imp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.ProductBillDTO;
import com.example.mypkg.dto.ProductDTO;
import com.example.mypkg.entity.ProductBill;
import com.example.mypkg.repository.ProductBillRepository;
import com.example.mypkg.service.ProductBillService;

@Service
public class ProductBillServiceImp implements ProductBillService{
     
	@Autowired
	private ProductBillRepository productBill;
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public List<ProductBill> getAllProductBills() {
		if(productBill.findAll().size()>0) {
			return productBill.findAll().stream()
					.map(bill -> modelMapper.map(bill, ProductBill.class)).collect(Collectors.toList());
		}
		return new ArrayList<>();
	}

}
