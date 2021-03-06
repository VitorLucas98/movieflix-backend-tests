package com.devsuperior.movieflix.services;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.UserDTO;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.UserRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;
import com.devsuperior.movieflix.services.exceptions.UnauthorizedException;

@Service
public class UserService implements UserDetailsService {

	private static Logger logger = LoggerFactory.getLogger(UserService.class);

	@Autowired
	private UserRepository repositoy;

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repositoy.findById(id);
		User user = obj.orElseThrow(() -> new ResourceNotFoundException("User not found !"));
		return new UserDTO(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repositoy.findByEmail(username);
		if (user == null) {
			logger.error("Username: " + username + " not found");
			throw new UsernameNotFoundException("Username not found");
		}
		logger.info("User found: " + username);
		return user;
	}

	public User authenticated() {
		try {
			String name = SecurityContextHolder.getContext().getAuthentication().getName();
			return repositoy.findByEmail(name);
		} catch (Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
}
