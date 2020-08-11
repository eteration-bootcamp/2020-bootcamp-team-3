package com.springtutorial.beeclassy.repository;

import com.springtutorial.beeclassy.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product,String> {
}
