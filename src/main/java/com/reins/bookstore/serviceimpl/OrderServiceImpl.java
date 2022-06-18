package com.reins.bookstore.serviceimpl;

import com.reins.bookstore.entity.Order;
import com.reins.bookstore.dao.OrderDao;
import com.reins.bookstore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Override
    public Order addOrder(Order order){
        return orderDao.addOrder(order);
    }

    @Override
    public Order findOrderById(Integer id){
        return orderDao.findOrderById(id);
    }
}
