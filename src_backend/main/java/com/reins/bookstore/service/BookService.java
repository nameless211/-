package com.reins.bookstore.service;

import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Order;

import java.util.List;


public interface BookService {

    Book findBookById(Integer id);

    List<Order> getBooks();
}
