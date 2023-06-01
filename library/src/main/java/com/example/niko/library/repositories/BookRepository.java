package com.example.niko.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.niko.library.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
