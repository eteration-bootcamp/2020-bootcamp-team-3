package com.springtutorial.beeclassy.service;

public interface SecurityService {
    String findLoggedInUsername();

    void autoLogin(String username, String password);
}