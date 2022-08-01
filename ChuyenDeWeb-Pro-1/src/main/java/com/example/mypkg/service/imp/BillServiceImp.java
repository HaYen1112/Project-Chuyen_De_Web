package com.example.mypkg.service.imp;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.entity.Bill;
import com.example.mypkg.entity.ProductBill;
import com.example.mypkg.repository.BillRepository;
import com.example.mypkg.repository.ProductBillRepository;
import com.example.mypkg.service.BillService;
import com.example.mypkg.until.BillStatus;

import lombok.var;

@Service
public class BillServiceImp implements BillService {
	@Autowired
	private BillRepository billRepository;
	@Autowired
	private ProductBillRepository productBillRepository;

	@Override
	public boolean paymentBill(Map<Long, Integer> products, String address, Long deliveryId) {
		Bill bill = billRepository.save(new Bill(address, BillStatus.WAITING, false, new Date(), deliveryId));
		if (bill != null) {
			for (var entry : products.entrySet()) {
				productBillRepository
						.save(new ProductBill(entry.getValue(), Long.valueOf(entry.getKey() + ""), bill.getId()));
			}
		}
		return true;
	}

}
