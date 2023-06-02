package com.example.niko.library.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	UserRepository repo;
	
	@Autowired
	BCryptPasswordEncoder encoder;
	
	@PostMapping
	@Secured("admin")  // Remove this for first few users....
	public User createUser(@RequestBody User user) {
		System.out.println("Luodaan " + user.getUsername());
		String pw = encoder.encode(user.getPassword());
		user.setPassword(pw);
		String role = "user";
		if (user.getRole()!=null) role = user.getRole();
		//user.setEnabled(true);
		user.setRole(role);
		repo.save(user);
		return user;
	}

}
