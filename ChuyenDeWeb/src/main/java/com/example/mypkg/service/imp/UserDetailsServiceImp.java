package com.example.mypkg.service.imp;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.mypkg.entity.UserApp;
import com.example.mypkg.repository.UserAppRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService {
	@Autowired
	private UserAppRepository userAppRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		UserApp appUser = userAppRepository.findByEmail(userName).get();

		return (UserDetails) new User(appUser.getEmail(), //
				appUser.getPassword(), new ArrayList<>());
	}
}
