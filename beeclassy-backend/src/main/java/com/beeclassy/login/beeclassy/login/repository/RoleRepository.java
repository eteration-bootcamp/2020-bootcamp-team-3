package com.beeclassy.login.beeclassy.login.repository;

import com.beeclassy.login.beeclassy.login.models.ERole;
import com.beeclassy.login.beeclassy.login.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
