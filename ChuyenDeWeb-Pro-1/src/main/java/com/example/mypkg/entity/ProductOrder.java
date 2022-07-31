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
@Table(name = "product_order")
public class ProductOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "product_id")
	private Long productId;
	@Column(name = "order_id")
	private Long orderId;
	@Column(name = "quantity")
	private Integer quantity;
	@ManyToOne()
	@JoinColumn(name = "product_id", insertable = false, nullable = false, updatable = false)
	private Product product;
	@ManyToOne()
	@JoinColumn(name = "order_id", insertable = false, nullable = false, updatable = false)
	private Order order;

}
