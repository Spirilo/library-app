package com.example.niko.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
