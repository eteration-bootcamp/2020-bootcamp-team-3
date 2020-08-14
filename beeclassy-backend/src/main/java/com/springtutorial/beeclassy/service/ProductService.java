package com.springtutorial.beeclassy.service;

import com.springtutorial.beeclassy.dao.ProductDao;
import com.springtutorial.beeclassy.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {

    private final ProductDao productDao;
    @Autowired
    public ProductService(@Qualifier("h2") ProductDao productDao) {
        this.productDao = productDao;
    }

    public int addProduct(Product product){
        return productDao.insertProduct(product);
    }

    public List<Product> getAllProduct(){
        return productDao.selectAllProduct();
    }

    public Optional<Product> getProductById(String id){
        return productDao.selectProductById(id);
    }

    public Optional<Product> getProductByName(String name){
        return productDao.selectProductByName(name);
    }

    public int deleteProduct(String id){
        return productDao.deleteProductById(id);
    }
    public int updateProduct(String id, Product newproduct){
        return productDao.updateProductById(id,newproduct);
    }

    public List<Product> getProductsByPriceSortedDescending(){
        return productDao.getProductsByPriceSortedDescending();
    }
    public List<Product> getProductsByPriceSortedAscending(){
        return productDao.getProductsByPriceSortedAscending();
    }
    public List<Product> getProductsLargerThan(int price){
        return productDao.getProductsLargerThan(price);
    }
    public List<Product> getProductsLowerThan(int price){
        return productDao.getProductsLowerThan(price);
    }

}
