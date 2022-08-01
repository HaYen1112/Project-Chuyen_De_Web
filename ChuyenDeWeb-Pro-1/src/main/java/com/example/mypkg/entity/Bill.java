package com.example.mypkg.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.mypkg.until.BillStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "bill")
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String address;
	private BillStatus billStatus;
	private boolean isDelete;
	private Date dateCreate;
	@Column(name = "delivery_cost_id")
	private Long deliveryCostId;
	@ManyToOne()
	@JoinColumn(name = "delivery_cost_id", insertable = false, nullable = false, updatable = false)
	private DeliveryCost deliveryCost;

	public Bill(String address, BillStatus billStatus, boolean isDelete, Date dateCreate, Long deliveryCostId) {
		super();
		this.address = address;
		this.billStatus = billStatus;
		this.isDelete = isDelete;
		this.dateCreate = dateCreate;
		this.deliveryCostId = deliveryCostId;
	}

}
