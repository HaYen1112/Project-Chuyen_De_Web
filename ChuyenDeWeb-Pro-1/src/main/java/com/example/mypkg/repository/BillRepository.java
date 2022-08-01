package com.example.mypkg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long>{

}
