package com.reins.bookstore.dao;

import com.reins.bookstore.entity.UserAuth;

public interface UserDao {

    UserAuth checkUser(String username, String password);

    UserAuth addUser(String username, String password, Integer user_type);
}
