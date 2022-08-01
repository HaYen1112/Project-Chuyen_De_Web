package com.example.mypkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.ProductBill;

@Repository
public interface ProductBillRepository extends JpaRepository<ProductBill, Long> {
	@Query("SELECT u FROM ProductBill u where u.billId = :billId")
	public List<ProductBill> getProductBillByBillId(@Param("billId") Long billId);
}
