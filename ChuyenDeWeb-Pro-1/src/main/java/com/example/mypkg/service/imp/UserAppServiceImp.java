package com.example.mypkg.service.imp;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.UserAppDTO;
import com.example.mypkg.entity.UserApp;
import com.example.mypkg.repository.UserAppRepository;
import com.example.mypkg.service.UserAppService;

@Service
@Transactional(rollbackOn = Exception.class)
public class UserAppServiceImp implements UserAppService {
	@Autowired
	private UserAppRepository userAppRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public boolean register(UserAppDTO userAppDTO) {
		try {
			userAppRepository.save(modelMapper.map(userAppDTO, UserApp.class));
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
