package com.example.niko.library.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.niko.library.entities.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer> {

}
