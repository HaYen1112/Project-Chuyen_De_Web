package com.example.mypkg.service.imp;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mypkg.dto.UserAppDTO;
import com.example.mypkg.entity.UserApp;
import com.example.mypkg.entity.UserAppRole;
import com.example.mypkg.repository.UserAppRepository;
import com.example.mypkg.repository.UserAppRoleRepository;
import com.example.mypkg.service.UserAppService;
import com.example.mypkg.until.EncrytedPasswordUtil;
import com.example.mypkg.until.Role;

@Service
@Transactional(rollbackOn = Exception.class)
public class UserAppServiceImp implements UserAppService {
	@Autowired
	private UserAppRepository userAppRepository;
	@Autowired
	private UserAppRoleRepository userAppRoleRepository;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public boolean register(UserAppDTO userAppDTO) {
		try {
			Optional<UserApp> user = userAppRepository.findByEmail(userAppDTO.getEmail());
			if (user.isEmpty()) {
				userAppDTO.setPassword(EncrytedPasswordUtil.encrytePassword(userAppDTO.getPassword()));
				UserApp newUser = userAppRepository.save(modelMapper.map(userAppDTO, UserApp.class));
				userAppRoleRepository.save(new UserAppRole(Role.ROLE_USER.get(), newUser.getId()));
				return true;
			}
			return false;
		} catch (Exception e) {
			return false;
		}
	}
}
