package com.example.mypkg.until;

public enum ProductType {
	MAN("man"), WOMAN("woman"), KID("kid");

	private String type;

	private ProductType(String type) {
		this.type = type;
	}

	public String get() {
		return this.type;
	}

	public static ProductType formString(String productType) {
		if (MAN.get().equals(productType)) {
			return MAN;
		} else if (WOMAN.get().equals(productType)) {
			return WOMAN;
		} else if (KID.get().equals(productType)) {
			return KID;
		}
		return null;
	}
}
