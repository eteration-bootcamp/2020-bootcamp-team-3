package com.beeclassy.login.beeclassy.login.services;


import com.beeclassy.login.beeclassy.login.models.Product;
import com.beeclassy.login.beeclassy.login.models.Wishlist;

import com.beeclassy.login.beeclassy.login.repository.ProductRepository;
import com.beeclassy.login.beeclassy.login.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WishlistService {

    @Autowired
    private WishlistRepository wishlistRepository;

    @Autowired
    private ProductRepository productRepository;

    public void addToWishlist(String productId, int userId) {
        Optional<Wishlist> wishlistOptional = wishlistRepository.findByUserId(userId);
        Optional<Product> productOptional = productRepository.findById(productId);
        List<Product> productList = null;
        if (productOptional.isPresent()) {
            if (wishlistOptional.isPresent()) {
                for (int i = 0; i < productList.size(); i++) {
                    productList.add(i, productOptional.get());
                    wishlistOptional.get().setProduct(productList);
                    wishlistRepository.save(wishlistOptional.get());
                    System.out.println(wishlistOptional.get().toString());
                }
            }
        }
    }

    public void deleteFromWishlist(String productId, int userId) {
        Optional<Wishlist> wishlistOptional = wishlistRepository.findByUserId(userId);
        Optional<Product> productOptional = productRepository.findById(productId);
        if (wishlistOptional.isPresent()) {
            if (productOptional.isPresent()) {
                wishlistOptional.get().getProduct().remove(productOptional.get());
            }
        }
    }
}
