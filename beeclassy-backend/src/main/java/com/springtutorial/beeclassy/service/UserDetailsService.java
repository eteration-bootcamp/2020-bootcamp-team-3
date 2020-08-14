package com.springtutorial.beeclassy.service;

import com.springtutorial.beeclassy.model.User;
import com.springtutorial.beeclassy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(s);

        user.orElseThrow(() -> new UsernameNotFoundException(s + "not found."));
        return user.map(UserDetailsImpl :: new).get();
    }
}
