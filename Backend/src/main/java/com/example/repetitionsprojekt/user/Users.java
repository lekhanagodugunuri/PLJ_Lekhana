package com.example.repetitionsprojekt.user;

import com.example.repetitionsprojekt.role.Role;
import lombok.*;



import javax.persistence.*;

@Getter
@Setter
@Entity(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Users {
    @Id
    @Column(name = "user_id")
    private Long userId;
    @Column(name = "user_name", unique = true)
    private String userName;
    private String password;
    @ManyToOne
    @JoinColumn(name="role_id", referencedColumnName="role_id")
    private Role role;
}
