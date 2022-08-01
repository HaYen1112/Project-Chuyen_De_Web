package com.example.mypkg.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.mypkg.until.BillStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@AllArgsConstructor
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
	@Column(name = "user_id")
	private Long userId;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "delivery_cost_id", insertable = false, nullable = false, updatable = false)
	private DeliveryCost deliveryCost;
	@ManyToOne()
	@JoinColumn(name = "user_id", insertable = false, nullable = false, updatable = false)
	private UserApp userApp;

	public Bill(String address, BillStatus billStatus, boolean isDelete, Date dateCreate, Long deliveryCostId,Long userId) {
		super();
		this.address = address;
		this.billStatus = billStatus;
		this.isDelete = isDelete;
		this.dateCreate = dateCreate;
		this.deliveryCostId = deliveryCostId;
		this.userId = userId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public BillStatus getBillStatus() {
		return billStatus;
	}

	public void setBillStatus(BillStatus billStatus) {
		this.billStatus = billStatus;
	}

	public boolean isDelete() {
		return isDelete;
	}

	public void setDelete(boolean isDelete) {
		this.isDelete = isDelete;
	}

	public Date getDateCreate() {
		return dateCreate;
	}

	public void setDateCreate(Date dateCreate) {
		this.dateCreate = dateCreate;
	}

	public Long getDeliveryCostId() {
		return deliveryCostId;
	}

	public void setDeliveryCostId(Long deliveryCostId) {
		this.deliveryCostId = deliveryCostId;
	}

	public DeliveryCost getDeliveryCost() {
		return deliveryCost;
	}

	public void setDeliveryCost(DeliveryCost deliveryCost) {
		this.deliveryCost = deliveryCost;
	}

	public Bill() {
		super();
	}

}
