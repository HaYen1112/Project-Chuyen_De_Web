package com.example.mypkg.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.UserApp;

@Repository
public interface UserAppRepository extends JpaRepository<UserApp, Long> {
	public Optional<UserApp> findByEmail(String email);
}
