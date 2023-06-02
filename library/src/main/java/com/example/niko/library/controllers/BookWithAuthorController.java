package com.example.niko.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.niko.library.entities.BookWithAuthor;
import com.example.niko.library.repositories.BookWithAuthorRepository;

@RestController
@RequestMapping("book/author")
public class BookWithAuthorController {
	@Autowired
	BookWithAuthorRepository repo;
	
	@GetMapping
	List<BookWithAuthor> getAll() {
		return repo.findAll();
	}
}
