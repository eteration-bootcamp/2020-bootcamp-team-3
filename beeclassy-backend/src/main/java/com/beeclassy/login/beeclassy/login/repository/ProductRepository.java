package com.beeclassy.login.beeclassy.login.repository;


import com.beeclassy.login.beeclassy.login.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface ProductRepository extends JpaRepository<Product,String> {
    Optional<Product> findByName(String name);
    List<Product> findAllByPriceGreaterThanEqual(int price);
    List<Product> findAllByPriceLessThanEqual(int price);
    List<Product> findAllByOrderByPriceAsc();
    List<Product> findAllByOrderByPriceDesc();
}
