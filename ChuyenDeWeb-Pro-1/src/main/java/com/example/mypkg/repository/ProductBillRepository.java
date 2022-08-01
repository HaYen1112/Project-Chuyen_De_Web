package com.example.mypkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.ProductBill;

@Repository
public interface ProductBillRepository extends JpaRepository<ProductBill, Long>{

}
