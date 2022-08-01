package com.example.mypkg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mypkg.dto.AuthDTO;
import com.example.mypkg.dto.ResponseObject;
import com.example.mypkg.dto.UserAppDTO;
import com.example.mypkg.service.UserAppRoleService;
import com.example.mypkg.service.UserAppService;
import com.example.mypkg.until.JwtUtil;
import com.example.mypkg.until.Message;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserAppRoleService userAppRoleService;
	@Autowired
	private UserAppService userAppService;

	@PostMapping("/authenticate")
	public ResponseEntity<ResponseObject> generatoken(@RequestBody UserAppDTO userAppDTO) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(userAppDTO.getEmail(), userAppDTO.getPassword()));
		} catch (Exception e) {
			return ResponseEntity.ok().body(new ResponseObject(String.valueOf(HttpStatus.EXPECTATION_FAILED),
					Message.MS_LOGIN_FAILED.get(), null));
		}
		List<String> myRoles = userAppRoleService.getRoleNames(userAppDTO.getEmail());
		AuthDTO authDTO = new AuthDTO(jwtUtil.generateToken(userAppDTO.getEmail()), myRoles);
		return ResponseEntity.ok().body(new ResponseObject(String.valueOf(HttpStatus.OK), "", authDTO));
	}

	@PostMapping("/register")
	public ResponseEntity<ResponseObject> register(@RequestBody UserAppDTO userAppDTO) throws Exception {
		boolean isRegister = userAppService.register(userAppDTO);
		if (isRegister) {
			return ResponseEntity.ok()
					.body(new ResponseObject(String.valueOf(HttpStatus.OK), Message.MS_REGISTER_SUCCEED.get(), true));
		}
		return ResponseEntity.ok().body(new ResponseObject(String.valueOf(HttpStatus.EXPECTATION_FAILED),
				Message.MS_REGISTER_FAILED.get(), false));
	}
}
