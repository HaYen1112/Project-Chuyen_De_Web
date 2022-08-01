package com.example.mypkg.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.mypkg.filter.JwtFilter;
import com.example.mypkg.service.imp.UserDetailsServiceImp;
import com.example.mypkg.until.Role;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserDetailsServiceImp userDetailsServiceImp;
	@Autowired
	private JwtFilter jwtFilter;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsServiceImp);
	}

	@Bean
	BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean(name = BeanIds.AUTHENTICATION_MANAGER)
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.cors();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.exceptionHandling();
		http.authorizeRequests()
				.antMatchers("/authenticate", "/product/get-product-by-id/**", "/product/get-all-by-product-type/**",
						"/product/get-product-by-name/**", "/delivery-cost/get-delivery-cost/**")
				.permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/bill/payment/**").hasAnyAuthority(Role.ROLE_USER.get(),
				Role.ROLE_ADMIN.get());
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/bill/get-all-bills/**")
				.hasAnyAuthority(Role.ROLE_USER.get(), Role.ROLE_ADMIN.get());
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
	}
}
