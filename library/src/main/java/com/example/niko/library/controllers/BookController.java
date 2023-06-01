package com.example.niko.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.niko.library.entities.Book;
import com.example.niko.library.repositories.BookRepository;

@RestController
@RequestMapping("books")
public class BookController {
	@Autowired
	BookRepository repo;
	
	@GetMapping
	List<Book> getAll() {
		return repo.findAll();
	}

}
