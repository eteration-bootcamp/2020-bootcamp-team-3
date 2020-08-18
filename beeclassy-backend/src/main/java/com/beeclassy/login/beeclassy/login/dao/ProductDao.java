package com.beeclassy.login.beeclassy.login.dao;



import com.beeclassy.login.beeclassy.login.models.Product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductDao{
    int insertProduct(String id, Product product);
    default int insertProduct(Product product){
        String id = UUID.randomUUID().toString();
        return insertProduct(id,product);
    }
    List<Product> selectAllProduct();

    Optional<Product> selectProductById(String id);

    Optional<Product> selectProductByName(String name);

    int deleteProductById(String id);
    int updateProductById(String id, Product product);
    List<Product> getProductsByPriceSortedAscending();
    List<Product> getProductsByPriceSortedDescending();
    List<Product> getProductsLargerThan(int threshold);
    List<Product> getProductsLowerThan(int threshold);
    final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    public static String randomAlphaNumeric() {
        int count = 15;
        StringBuilder builder = new StringBuilder();
        while (count-- != 0) {
            int character = (int)(Math.random()*ALPHA_NUMERIC_STRING.length());
            builder.append(ALPHA_NUMERIC_STRING.charAt(character));
        }
        return builder.toString();
    }
}
