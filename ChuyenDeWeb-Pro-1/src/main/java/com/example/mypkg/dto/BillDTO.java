package com.example.mypkg.dto;

import java.text.SimpleDateFormat;
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
	private String date;
	private List<ProductBillDTO> productBillsDTO;

	public BillDTO(Bill bill, List<ProductBillDTO> productBillsDTO) {
		super();
		this.date = new SimpleDateFormat("dd-MM-yyyy").format(bill.getDateCreate());
		this.billStatus = bill.getBillStatus().get();
		this.address = bill.getAddress();
		this.deliveryCost = bill.getDeliveryCost().getCost();
		this.productBillsDTO = productBillsDTO;
	}

}
