package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.BookDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Book findBookById(Integer id){
        return bookDao.findOne(id);
    }

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }
}
