package com.beeclassy.login.beeclassy.login.repository;


import com.beeclassy.login.beeclassy.login.models.Wishlist;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WishlistRepository extends CrudRepository<Wishlist, Integer> {

    @Query("SELECT Wishlist FROM Wishlist AS Wishlist WHERE user_id = ?1")
    Optional<Wishlist> findByUserId(int userId);

}
