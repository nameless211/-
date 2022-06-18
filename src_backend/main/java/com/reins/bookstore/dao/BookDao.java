package com.reins.bookstore.dao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Order;

import java.util.List;

public interface BookDao {
    Book findOne(Integer id);

    List<Order> getBooks();
}
