package dev.springboot.repository;

import dev.springboot.common.RoleType;
import dev.springboot.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByRole(RoleType roletype);
}
