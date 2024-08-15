package com.app.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public class ErrorResponse {
    public ErrorResponse(String string, String message) {
		// TODO Auto-generated constructor stub
	}
	private String errorType;
    private String errorMessage;
}
