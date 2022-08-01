package com.example.mypkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Long> {
	@Query("SELECT u FROM Bill u where u.userId = :userAppId and u.isDelete = :isDelete")
	List<Bill> getBillByUserId(@Param("userAppId") Long userAppId, @Param("isDelete") boolean isDelete);
}
