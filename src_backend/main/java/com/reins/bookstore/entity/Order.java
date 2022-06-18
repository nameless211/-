package com.reins.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;


@Data
@Entity
@Table(name = "`ord`")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "orderId")
public class Order {

    @Id
    @Column(name = "id")
    private int orderId;
    private String time;
    private String doctorname;
    private String department;
      //空表示无人预约，否则表示预约的用户的id
    private Integer capacity;




}
