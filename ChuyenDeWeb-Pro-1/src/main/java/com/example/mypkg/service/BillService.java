package com.example.mypkg.service;

import java.util.Map;

public interface BillService {
	public boolean paymentBill(Map<Long, Integer> products, String address, Long deliveryId);
}
