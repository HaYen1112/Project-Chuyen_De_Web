package com.example.mypkg.service;

import java.util.List;
import java.util.Map;

import com.example.mypkg.dto.BillDTO;

public interface BillService {
	public boolean paymentBill(Map<Long, Integer> products, String address, Long deliveryId);

	public List<BillDTO> getAllBills(Long userId);
}
