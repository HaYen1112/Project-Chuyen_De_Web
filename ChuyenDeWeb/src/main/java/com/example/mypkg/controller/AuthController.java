package com.example.mypkg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.ResponseObject;
import com.example.mypkg.dto.UserAppDTO;
import com.example.mypkg.until.JwtUtil;
import com.example.mypkg.until.Message;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/authenticate")
	public ResponseEntity<?> generatoken(@RequestBody UserAppDTO userAppDTO) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(userAppDTO.getEmail(), userAppDTO.getPassword()));
		} catch (Exception e) {
			return ResponseEntity.ok().body(new ResponseObject(String.valueOf(HttpStatus.EXPECTATION_FAILED),
					Message.MS_LOGIN_FAILED.get(), null));
		}
		return ResponseEntity.ok().body(
				new ResponseObject(String.valueOf(HttpStatus.OK), "", jwtUtil.generateToken(userAppDTO.getEmail())));
	}
}
