package com.example.mypkg.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
// chuyển dữ liệu từ entity sang DTO or ngược lại
	@Bean
	ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
