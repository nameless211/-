package com.reins.bookstore.daoimpl;

import  com.reins.bookstore.dao.DisplayDao;
import  com.reins.bookstore.entity.Display;
import  com.reins.bookstore.repository.DisplayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DisplayDaoImpl implements DisplayDao{
    @Autowired
    private DisplayRepository displayRepository;

    @Override
    public List<Display> displayAll() {
        return displayRepository.findAll();
    }

}
