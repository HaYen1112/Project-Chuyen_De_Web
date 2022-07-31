package com.example.mypkg.until;

public enum Message {
	MS_LOGIN_FAILED("Login is failed!");

	private String message;

	Message(String message) {
		this.message = message;
	}

	public String get() {
		return this.message;
	}
}
