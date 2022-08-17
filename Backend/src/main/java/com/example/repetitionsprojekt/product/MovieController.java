package com.example.repetitionsprojekt.product;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.InstanceNotFoundException;
import java.util.List;

@RequiredArgsConstructor
@RestController

@RequestMapping("/movies")
public class MovieController {
    @Autowired
    private final MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok().body(service.getAllMovie());
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<Movie> getMovieById( @PathVariable Integer movieId) throws InstanceNotFoundException {
        return ResponseEntity.ok().body(service.getMovie(movieId));
    }

    @PostMapping
    public ResponseEntity<Movie> createBook( @RequestBody Movie movie)  {
        return ResponseEntity.ok().body(service.createMovie(movie));
    }

}
