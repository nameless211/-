package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.dao.DisplayDao;
import com.reins.bookstore.service.DisplayService;
import com.reins.bookstore.entity.Display;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DisplayServiceImpl implements DisplayService{
    @Autowired
    private DisplayDao displayDao;

    @Override
    public List<Display> displayAll(){return displayDao.displayAll();}

}
