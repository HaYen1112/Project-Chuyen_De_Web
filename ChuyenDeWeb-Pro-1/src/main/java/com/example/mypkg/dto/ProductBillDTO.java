package com.example.mypkg.dto;

import com.example.mypkg.entity.ProductBill;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductBillDTO {
	private Integer quantity;
	private String image;
	private String productName;
	private Float price;

	public ProductBillDTO(ProductBill productBill) {
		super();
		this.quantity = productBill.getQuantity();
		this.image = productBill.getProduct().getImg();
		this.productName = productBill.getProduct().getProductName();
		this.price = productBill.getProduct().getPrice();
	}

}
