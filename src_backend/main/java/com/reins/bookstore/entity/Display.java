package com.reins.bookstore.entity;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;
@Entity
@Table(name = "news")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "num")
public class Display {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int num;
    private String name;
    private String date;


    public int getNum() {
        return num;
    }
    public void setNum(int num) {
        this.num = num;
    }

    @Basic

    public String getName() {
        return name;
    }
    public void setName(String title) {
        this.name = name;
    }

    @Basic

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
}
