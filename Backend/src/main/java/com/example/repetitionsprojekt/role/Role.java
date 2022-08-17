package com.example.repetitionsprojekt.role;

import com.example.repetitionsprojekt.authority.Authority;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data@Entity
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "role_id")
    private Long id;
    @Column(nullable = false)
    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            joinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "role_id"),
            inverseJoinColumns = @JoinColumn(
                    name = "authority_id", referencedColumnName = "authority_id"))
    private List<Authority> authorities;

    public Role(String name, List<Authority> authorities) {
        this.name=name;
        this.authorities=authorities;
    }

    public Role() {

    }

    public String toString() {
        return getName();
    }
}