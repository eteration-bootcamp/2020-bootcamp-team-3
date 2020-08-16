package com.springtutorial.beeclassy.service;

import com.springtutorial.beeclassy.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);

}
