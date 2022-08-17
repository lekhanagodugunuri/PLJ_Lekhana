package com.example.repetitionsprojekt.product;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Movie {
    @Id
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

