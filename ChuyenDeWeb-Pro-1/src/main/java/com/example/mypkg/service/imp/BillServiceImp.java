package com.example.mypkg.service.imp;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.BillDTO;
import com.example.mypkg.dto.ProductBillDTO;
import com.example.mypkg.entity.Bill;
import com.example.mypkg.entity.ProductBill;
import com.example.mypkg.repository.BillRepository;
import com.example.mypkg.repository.ProductBillRepository;
import com.example.mypkg.service.BillService;
import com.example.mypkg.until.BillStatus;
import com.example.mypkg.until.JwtUtil;

import lombok.var;

@Service
public class BillServiceImp implements BillService {
	@Autowired
	private BillRepository billRepository;
	@Autowired
	private ProductBillRepository productBillRepository;
	@Autowired
	private JwtUtil jwtUtil;

	@Override
	public boolean paymentBill(Map<Long, Integer> products, String address, Long deliveryId) {
		Bill bill = billRepository.save(
				new Bill(address, BillStatus.WAITING, false, new Date(), deliveryId, jwtUtil.getCurrentUser().getId()));
		if (bill != null) {
			for (var entry : products.entrySet()) {
				productBillRepository
						.save(new ProductBill(entry.getValue(), Long.valueOf(entry.getKey() + ""), bill.getId()));
			}
		}
		return true;
	}

	@Override
	public List<BillDTO> getAllBills(Long userId) {
		List<Bill> bills = billRepository.getBillByUserId(userId, false);
		List<BillDTO> result = new ArrayList<>();
		for (Bill bill : bills) {
			List<ProductBill> productBills = productBillRepository.getProductBillByBillId(bill.getId());
			List<ProductBillDTO> productBillsDTO = convertToProductBillDTO(productBills);
			result.add(new BillDTO(bill, productBillsDTO));
		}
		return result;
	}

	public List<ProductBillDTO> convertToProductBillDTO(List<ProductBill> productBills) {
		List<ProductBillDTO> result = new ArrayList<>();
		for (ProductBill productBill : productBills) {
			result.add(new ProductBillDTO(productBill));
		}
		return result;
	}
}
