package com.example.repetitionsprojekt.product;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity (name = "movie")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Movie {
    @Id

    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "movie_id")
    private Integer movieId;
    @NotNull
    @Column(name = "movie_name")
    private String movieName;
    @Column(name = "movie_price")
    private Integer moviePrice;
    @Column(name = "movie_genre")
    private String movieGenre;
}

