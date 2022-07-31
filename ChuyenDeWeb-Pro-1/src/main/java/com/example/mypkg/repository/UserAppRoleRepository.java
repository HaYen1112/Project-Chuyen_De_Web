package com.example.mypkg.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mypkg.entity.UserAppRole;

@Repository
public interface UserAppRoleRepository extends JpaRepository<UserAppRole, Long> {
	@Query("SELECT u.role.roleName FROM UserAppRole u where u.userApp.id = :userAppId")
	List<String> getRoleNames(@Param("userAppId") Long userAppId);
}
