package com.reins.bookstore.dao;

import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.Orderinstance;

import java.util.List;

public interface OrderDao {
    Order addOrder(Order order);

    Order findOrderById(Integer id);

    Orderinstance addoi(Integer did, Integer pid, String dname, String pname, String time,String dpmt);

    List<Orderinstance> getonesorder(Integer u);

    void deleteorder(Integer i);
}
