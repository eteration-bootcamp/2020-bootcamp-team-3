package com.beeclassy.login.beeclassy.login.controllers;


import com.beeclassy.login.beeclassy.login.models.Product;
import com.beeclassy.login.beeclassy.login.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.annotation.WebServlet;
import java.util.List;
import java.util.Optional;



@RequestMapping("/api/v1/product")
@RestController("product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody @Validated @NonNull Product product) {
        try {
            productService.addProduct(product);
            return ResponseEntity.status(HttpStatus.CREATED).body(productService.getProductByName(product.getName()));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

    }
    @GetMapping
    public ResponseEntity<?> getAllProduct() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getAllProduct());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping(path = "name/{name}")
    public ResponseEntity<?> getProductByName(@PathVariable("name") String name) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductByName(name));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @GetMapping(path = "{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") String id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductById(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable("id") String id) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }
    @GetMapping(path = "priceDesc")
    public ResponseEntity<?> getProductsByPriceSortedDescending(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsByPriceSortedDescending());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping(path = "priceAsc")
    public ResponseEntity<?> getProductsByPriceSortedAscending(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(productService.getProductsByPriceSortedAscending());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @GetMapping(path = "priceLarger/{price}")
    public ResponseEntity<?> getProductsLargerThan(@PathVariable("price") int price){
        try {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.getProductsLargerThan(price));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @GetMapping(path = "priceLower/{price}")
    public ResponseEntity<?> getProductsLowerThan(@PathVariable("price") int price){
        try {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.getProductsLowerThan(price));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping(path = "{id}")
    public ResponseEntity<?> updateProductById(@PathVariable("id") String id, @RequestBody @Validated @NonNull Product productUpdate) {

        try {
            productService.updateProduct(id, productUpdate);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(productService.getProductById(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
