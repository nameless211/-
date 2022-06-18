package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Orderinstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface OiRepository extends JpaRepository<Orderinstance,Integer>{
}
