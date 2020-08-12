package com.springtutorial.beeclassy.controller;

import com.springtutorial.beeclassy.model.Product;
import com.springtutorial.beeclassy.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;



@RequestMapping("/api/v1/product")
@RestController
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
