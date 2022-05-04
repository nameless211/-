package com.reins.bookstore.service;

import com.reins.bookstore.entity.Order;
import com.reins.bookstore.utils.msgutils.Msg;

public interface OrderService {
    Order addOrder(Order order);

    Order findOrderById(Integer id);
}
