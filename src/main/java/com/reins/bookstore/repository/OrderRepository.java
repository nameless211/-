package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {
//    @Query(value = "update Order set patientName = : userId where id = :orderId")
//    void updateUser(Integer userId,Integer orderId);
}
