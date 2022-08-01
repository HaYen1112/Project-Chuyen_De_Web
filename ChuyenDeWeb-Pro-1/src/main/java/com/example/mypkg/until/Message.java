package com.example.mypkg.until;

public enum Message {
	MS_LOGIN_FAILED("Đăng nhập thất bại!"), MS_PAYMENT_SUCCEED("Thanh toán thành công!"),
	MS_PAYMENT_FAILED("Thanh toán thất bại!");

	private String message;

	Message(String message) {
		this.message = message;
	}

	public String get() {
		return this.message;
	}
}
