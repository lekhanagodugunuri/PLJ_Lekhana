package com.example.repetitionsprojekt.product;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.InstanceNotFoundException;
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

    public Movie getMovie(Integer id) throws InstanceNotFoundException {
        return repository.findById(id).orElseThrow(() -> new InstanceNotFoundException("There is no Movie with this id"));

    }

    public Movie createMovie(Movie movie) {
        return repository.save(movie);
    }



}
