package com.reins.bookstore.repository;

import com.reins.bookstore.entity.Display;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface DisplayRepository extends JpaRepository<Display,Integer>{
    @Query("select d from Display d" )
    List<Display> displayAll();
}
