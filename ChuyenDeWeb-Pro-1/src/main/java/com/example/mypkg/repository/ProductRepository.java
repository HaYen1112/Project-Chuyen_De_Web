package com.example.mypkg.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.DeliveryCost;
import com.example.mypkg.entity.Product;
import com.example.mypkg.until.ProductType;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	public Optional<Product> findByIdAndIsDelete(Long productId, boolean isDelete);

	public List<Product> findByProductTypeAndIsDelete(ProductType productType, boolean isDelete);

	@Query("SELECT u FROM Product u WHERE lower(u.productName) LIKE lower(CONCAT('%',:name,'%')) and u.isDelete = :isDelete")
	public List<Product> searchProductName(@Param("name") String name, @Param("isDelete") boolean isDelete );

}
