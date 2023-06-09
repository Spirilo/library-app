package com.example.niko.library.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.niko.library.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {
	
	@Query("SELECT b FROM Book b WHERE b.authorId = ?1")
	List<Book> findByAuthor(int i);
	
	@Query("SELECT b FROM Book b WHERE b.title LIKE %:name%")
	List<Book> findByTitle(@Param("name")String f);
	
	@Query("SELECT b FROM Book b WHERE b.userId = ?1")
	List<Book> findByUserId(int id);

}
