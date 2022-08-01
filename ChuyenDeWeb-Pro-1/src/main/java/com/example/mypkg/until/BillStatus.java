package com.example.mypkg.until;

public enum BillStatus {
	WAITING("Waiting for confirm!"), CONFIRMED("Confirmed, waiting for delivery!"), DELIVERING("Bill is delivering!"),
	RECEITVED("Bill is received");

	private String status;

	BillStatus(String status) {
		this.status = status;
	}

	public String get() {
		return this.status;
	}
}
