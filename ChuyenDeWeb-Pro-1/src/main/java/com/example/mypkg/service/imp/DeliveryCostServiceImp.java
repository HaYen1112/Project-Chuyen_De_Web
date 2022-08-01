package com.example.mypkg.service.imp;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.DeliveryCostDTO;
import com.example.mypkg.entity.DeliveryCost;
import com.example.mypkg.repository.DeliveryCostRepository;
import com.example.mypkg.service.DeliveryCostService;

@Service
public class DeliveryCostServiceImp implements DeliveryCostService {
	@Autowired
	private DeliveryCostRepository deliveryCostRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public DeliveryCostDTO getDeliveryCost() {
		DeliveryCost deliveryCost = deliveryCostRepository.findBillByIsDelete(false).get();
		if (deliveryCost != null) {
			return modelMapper.map(deliveryCostRepository.findBillByIsDelete(false).get(), DeliveryCostDTO.class);
		}
		return null;
	}
}
