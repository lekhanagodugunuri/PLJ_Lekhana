package com.example.repetitionsprojekt.authority;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity


public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "authority_id")
    private Long id;
    private String name;


    public Authority() {
    }
}