package com.springtutorial.beeclassy.dao;

import com.springtutorial.beeclassy.model.Product;
import com.springtutorial.beeclassy.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("h2")
public class ProductDataAccessService implements ProductDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProductDataAccessService(JdbcTemplate jdbcTemplate, ProductRepository productRepository) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public int insertProduct(String id, Product product) {
        String sql = "INSERT INTO product (id,name,description,price) VALUES (?,?,?,?)";
        return jdbcTemplate.update(sql,id,product.getName(),product.getDescription(),product.getPrice());
    }

    @Override
    public List<Product> selectAllProduct() {
        final String sql = "SELECT id,name,description,price FROM product";
        return jdbcTemplate.query(sql, (resultSet,i) -> {
            String id = resultSet.getString("id");
            String name = resultSet.getString("name");
            String description = resultSet.getString("DESCRIPTION");
            int price = resultSet.getInt("price");
            return new Product(id,name,description,price);
        });
    }

    @Override
    public Optional<Product> selectProductById(String id) {
        final String sql = "SELECT id,name,description,price FROM product WHERE id=?";

        Product product= jdbcTemplate.queryForObject(sql, new Object[]{id},((resultSet,i) -> {
            String prodid = resultSet.getString("id");
            String name = resultSet.getString("name");
            String description = resultSet.getString("DESCRIPTION");
            int price = resultSet.getInt("price");
            return new Product(prodid,name,description,price);
        }));
        return Optional.ofNullable(product);
    }
    @Override
    public Optional<Product> selectProductByName(String name){
        final String sql = "SELECT id,name,description,price FROM product WHERE name=?";

        Product product= jdbcTemplate.queryForObject(sql, new Object[]{name},((resultSet,i) -> {
            String prodid = resultSet.getString("id");
            String prodname = resultSet.getString("name");
            String description = resultSet.getString("DESCRIPTION");
            int price = resultSet.getInt("price");
            return new Product(prodid,prodname,description,price);
        }));
        return Optional.ofNullable(product);
    }

    @Override
    public int deleteProductById(String id) {
        String sql = "DELETE FROM product WHERE id=?";
        return jdbcTemplate.update(sql,id);
    }

    @Override
    public int updateProductById(String id, Product product) {
        String sql = "UPDATE product SET name=?,description=?,price=? WHERE id=?";
        return jdbcTemplate.update(sql,product.getName(),product.getDescription(),product.getPrice(),id);
    }
}
