package com.example.mypkg.until;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import com.example.mypkg.dto.ResponseObject;

public class HandleError {
	public static ResponseEntity<?> bindingError(BindingResult bindingResult, Object data) {
		return ResponseEntity.ok().body(new ResponseObject(String.valueOf(HttpStatus.OK),
				bindingResult.getAllErrors().get(0).getDefaultMessage(), data));
	}
}
