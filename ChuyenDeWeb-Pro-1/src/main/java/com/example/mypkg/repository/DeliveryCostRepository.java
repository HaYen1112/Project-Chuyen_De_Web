package com.example.mypkg.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.DeliveryCost;

@Repository
public interface DeliveryCostRepository extends JpaRepository<DeliveryCost, Long> {
	public Optional<DeliveryCost> findBillByIsDelete(boolean isDelete);
}
