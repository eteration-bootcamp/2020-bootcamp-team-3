package com.beeclassy.login.beeclassy.login.controllers;


import com.beeclassy.login.beeclassy.login.services.WishlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WishlistController {

    @Autowired
    private WishlistService wishlistService;

    @PostMapping(value = "/add-to-wishlist")
    public void addToWishlist(@RequestBody String  productId, @RequestBody int userId) {
        wishlistService.addToWishlist(productId, userId);
    }

    @PostMapping(value = "/delete-from-wishlist")
    public void deleteFromWishlist(@RequestParam String productId, @RequestParam int userId){
        wishlistService.deleteFromWishlist(productId, userId);
    }
}
