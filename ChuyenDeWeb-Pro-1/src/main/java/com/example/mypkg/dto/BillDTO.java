package com.example.mypkg.dto;

import java.util.List;

import com.example.mypkg.entity.Bill;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BillDTO {
	private String billStatus;
	private String address;
	private Float deliveryCost;
	private List<ProductBillDTO> productBillsDTO;

	public BillDTO(Bill bill, List<ProductBillDTO> productBillsDTO) {
		super();
		this.billStatus = bill.getBillStatus().get();
		this.address = bill.getAddress();
		this.deliveryCost = bill.getDeliveryCost().getCost();
		this.productBillsDTO = productBillsDTO;
	}

}
