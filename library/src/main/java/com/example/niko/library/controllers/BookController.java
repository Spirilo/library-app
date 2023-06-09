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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.niko.library.entities.Book;
import com.example.niko.library.entities.Info;
import com.example.niko.library.repositories.BookRepository;

@RestController
@RequestMapping("books")
public class BookController {
	@Autowired
	BookRepository repo;
	
	@GetMapping
	List<Book> getAll(@RequestParam(name="filter") String f){
		return repo.findByTitle(f);
	}
	
	@GetMapping("/{id}")
	Book get(@PathVariable int id) {
		Book b = repo.findById(id).orElse(null);
		if (b == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No book by id in database");
		return b;
	}
	
	@GetMapping("/{id}/loans")
	List<Book> getLoans(@PathVariable int id) {
		return repo.findByUserId(id);
	}
	
	@PostMapping
	Book create(@RequestBody Book b) {
		b.setAvailable(1);
		repo.saveAndFlush(b);
		return b;
	}
	
	@PutMapping("/{id}")
	Book save(@PathVariable int id, @RequestBody Book b) {
		Book book = repo.findById(id).orElse(null);
		if (b == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No book by id in database");
		book.setTitle(b.getTitle());
		book.setAvailable(b.getAvailable());
		book.setUserId(b.getUserId());
		book.setLoans(b.getLoans());
		repo.saveAndFlush(book);
		return book;
	}
	
	@DeleteMapping("/{id}") 
	Info delete(@PathVariable int id) {
		Book b = repo.findById(id).orElse(null);
		if (b == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No book by id in database");
		repo.deleteById(id);
		return new Info("Deleted book!");
	}

}
