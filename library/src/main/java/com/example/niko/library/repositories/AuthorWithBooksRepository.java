package com.example.niko.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.niko.library.entities.AuthorWithBooks;

public interface AuthorWithBooksRepository extends JpaRepository<AuthorWithBooks, Integer> {

}
