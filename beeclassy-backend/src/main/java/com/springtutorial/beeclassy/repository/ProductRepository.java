package com.springtutorial.beeclassy.repository;

import com.springtutorial.beeclassy.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends CrudRepository<Product,String> {
    Optional<Product> findByName(String name);
    List<Product> findAllByPriceGreaterThanEqual(int price);
    List<Product> findAllByPriceLessThanEqual(int price);
    List<Product> findAllByOrderByPriceAsc();
    List<Product> findAllByOrderByPriceDesc();
}
