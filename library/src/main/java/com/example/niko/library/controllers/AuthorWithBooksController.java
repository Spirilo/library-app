package com.example.niko.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.niko.library.entities.AuthorWithBooks;
import com.example.niko.library.repositories.AuthorWithBooksRepository;

@RestController
@RequestMapping("author/books")
public class AuthorWithBooksController {
	@Autowired
	AuthorWithBooksRepository repo;
	
	@GetMapping
	List<AuthorWithBooks> getAll() {
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	AuthorWithBooks get(@PathVariable int id) {
		AuthorWithBooks a = repo.findById(id).orElse(null);
		if (a == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No author by id in database");
		return a;
	}
}
