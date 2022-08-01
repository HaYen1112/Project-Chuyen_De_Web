package com.example.mypkg.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "product_bill")
public class ProductBill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer quantity;
	@Column(name = "product_id")
	private Long productId;
	@Column(name = "bill_id")
	private Long billId;
	@ManyToOne()
	@JoinColumn(name = "product_id", insertable = false, nullable = false, updatable = false)
	private Product product;
	@ManyToOne()
	@JoinColumn(name = "bill_id", insertable = false, nullable = false, updatable = false)
	private Bill bill;

	public ProductBill(Integer quantity, Long productId, Long billId) {
		super();
		this.quantity = quantity;
		this.productId = productId;
		this.billId = billId;
	}

}
