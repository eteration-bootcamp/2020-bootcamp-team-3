package com.springtutorial.beeclassy.repository;

import com.springtutorial.beeclassy.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Long> {
}
