package com.example.niko.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.niko.library.entities.Author;
import com.example.niko.library.entities.Info;
import com.example.niko.library.repositories.AuthorRepository;

@RestController
@RequestMapping("author")
public class AuthorController {
	@Autowired
	AuthorRepository repo;
	
	@GetMapping
	List<Author> getAll() {
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	Author get(@PathVariable int id) {
		Author a = repo.findById(id).orElse(null);
		if (a == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No author by id in database");
		return a;
	}
	
	@PostMapping
	Author create(@RequestBody Author a) {
		repo.saveAndFlush(a);
		return a;
	}
	
	@PutMapping("/{id}")
	Author save(@PathVariable int id, @RequestBody Author a) {
		Author author = repo.findById(id).orElse(null);
		if (author == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No book by id in database");
		author.setFirstName(a.getFirstName());
		author.setLastName(a.getLastName());
		repo.saveAndFlush(author);
		return author;
	}
	
	@DeleteMapping("/{id}") 
	Info delete(@PathVariable int id) {
		Author a = repo.findById(id).orElse(null);
		if (a == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No book by id in database");
		repo.deleteById(id);
		return new Info("Deleted book!");
	}

}
