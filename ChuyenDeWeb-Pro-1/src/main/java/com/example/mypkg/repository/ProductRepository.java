package com.example.mypkg.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.Product;
import com.example.mypkg.until.ProductType;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	public Optional<Product> findByIdAndIsDelete(Long productId, boolean isDelete);

	public List<Product> findByProductTypeAndIsDelete(ProductType productType, boolean isDelete);
	
	
}
