package com.example.mypkg.until;

public enum BillStatus {
	WAITING("Chờ xác nhận"), CONFIRMED("Đã xác nhận, đang chờ vận chuyển"), DELIVERING("Đang vận chuyển"),
	RECEITVED("Đã nhận");

	private String status;

	BillStatus(String status) {
		this.status = status;
	}

	public String get() {
		return this.status;
	}
}
