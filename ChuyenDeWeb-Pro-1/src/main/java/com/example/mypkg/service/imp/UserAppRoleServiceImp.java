package com.example.mypkg.service.imp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.entity.UserApp;
import com.example.mypkg.repository.UserAppRepository;
import com.example.mypkg.repository.UserAppRoleRepository;
import com.example.mypkg.service.UserAppRoleService;

@Service
public class UserAppRoleServiceImp implements UserAppRoleService {
	@Autowired
	private UserAppRoleRepository userAppRoleRepository;
	@Autowired
	private UserAppRepository userAppRepository;

	@Override
	public List<String> getRoleNames(String email) {
		UserApp userApp = userAppRepository.findByEmail(email).get();
		if (userApp != null) {
			return userAppRoleRepository.getRoleNames(userApp.getId());
		}
		return new ArrayList<>();
	}

}
