package com.example.niko.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.niko.library.entities.BookWithAuthor;

public interface BookWithAuthorRepository extends JpaRepository<BookWithAuthor, Integer> {

}
