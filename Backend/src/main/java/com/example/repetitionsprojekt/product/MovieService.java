package com.example.repetitionsprojekt.product;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MovieService {

    private final MovieRepository repository;

    @Autowired
    public MovieService(MovieRepository repository) {
        this.repository = repository;
    }

    public List<Movie> getAllMovie() {
        return repository.findAll();
    }

}
