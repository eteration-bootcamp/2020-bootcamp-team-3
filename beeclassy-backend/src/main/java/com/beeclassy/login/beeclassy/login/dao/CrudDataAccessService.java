package com.beeclassy.login.beeclassy.login.dao;


import com.beeclassy.login.beeclassy.login.models.Product;
import com.beeclassy.login.beeclassy.login.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("h2")
public class CrudDataAccessService implements ProductDao{

    @Autowired
    private ProductRepository productRepository;


    @Override
    public int insertProduct(String id, Product product) {
        productRepository.save(new Product(id,product.getName(),product.getDescription(),product.getPrice(),product.getImgUrl(),product.getType(),product.getGender()));
        return 1;
    }

    @Override
    public List<Product> selectAllProduct() {

        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Optional<Product> selectProductById(String id) {
        Optional<Product> product = productRepository.findById(id);
        return product;
    }

    @Override
    public Optional<Product> selectProductByName(String name) {
        Optional<Product> product = productRepository.findByName(name);
        return product;
    }

    @Override
    public int deleteProductById(String id) {
        productRepository.delete(productRepository.findById(id).get());
        return 1;
    }

    @Override
    public int updateProductById(String id, Product product) {
        Product product1 = productRepository.findById(id).get();
        product1.setName(product.getName());
        product1.setDescription(product.getDescription());
        product1.setPrice(product.getPrice());
        productRepository.save(product1);
        return 1;
    }

    @Override
    public List<Product> getProductsByPriceSortedAscending() {
        return productRepository.findAllByOrderByPriceAsc();
    }

    @Override
    public List<Product> getProductsByPriceSortedDescending() {
        return productRepository.findAllByOrderByPriceDesc();
    }

    @Override
    public List<Product> getProductsLargerThan(int price) {
        return productRepository.findAllByPriceGreaterThanEqual(price);
    }

    @Override
    public List<Product> getProductsLowerThan(int price) {
        return productRepository.findAllByPriceLessThanEqual(price);
    }
}
