package com.example.mypkg.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.mypkg.entity.Bill;
import com.example.mypkg.entity.Product;
import com.example.mypkg.until.ProductType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductBillDTO {
	private Long id;
	private Integer quantity;
	private Long productId;
	private Long billId;
	private Product product;
	private Bill bill;
}
