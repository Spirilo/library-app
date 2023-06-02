package com.example.niko.library.security;

public class LoginResponse {
	private String message;
	
	public LoginResponse(String m) {
		message = m;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
