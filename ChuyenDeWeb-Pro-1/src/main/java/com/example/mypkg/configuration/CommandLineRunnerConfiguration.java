package com.example.mypkg.configuration;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.example.mypkg.service.UserAppService;

//@Configuration
public class CommandLineRunnerConfiguration {
	@Bean
	CommandLineRunner commandLineRunner(UserAppService userService) {
		return args -> {
		};
	}
}
