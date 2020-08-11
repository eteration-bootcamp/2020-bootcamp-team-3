package com.springtutorial.beeclassy.controller;

import com.springtutorial.beeclassy.model.Product;
import com.springtutorial.beeclassy.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/product")
@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public void addProduct(@RequestBody @Validated @NonNull Product product) {
        productService.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllProduct() {
        return productService.getAllProduct();
    }

    @GetMapping(path = "{id}")
    public Product getProductById(@PathVariable("id") String id) {
        return productService.getProductById(id).orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public void deleteProductById(@PathVariable("id") String id) {
        productService.deleteProduct(id);
    }

    @PutMapping(path = "{id}")
    public void updateProductById(@PathVariable("id") String id, @RequestBody @Validated @NonNull Product productUpdate) {
        productService.updateProduct(id, productUpdate);
    }

}
