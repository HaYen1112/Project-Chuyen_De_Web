package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class ProjectChuyenDeWebApplication implements CommandLineRunner  {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public static void main(String[] args) {
		SpringApplication.run(ProjectChuyenDeWebApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		String sql = "INSERT INTO user(name, password) VALUES ("
				+"'nguyen van a', '123456' )";
		int rows = jdbcTemplate.update(sql);
		if(rows>0) {
			System.out.println("sdhsdhsdjs");
		}
		
	}


}
