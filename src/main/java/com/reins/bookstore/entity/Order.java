package com.reins.bookstore.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;

/**
 * @ClassName Book
 * @Description Book Entity
 * @Author thunderBoy
 * @Date 2019/11/5 19:19
 */
@Data
@Entity
@Table(name = "ord")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "orderId")
public class Order {

    @Id
    @Column(name = "id")
    private int orderId;
    private String time;
    private String doctorName;
    private String department;
    private Integer patientId;  //空表示无人预约，否则表示预约的用户的id

    public Integer getPatientId() {
        return patientId;
    }

    public void setPatientId(Integer patientId1) {
        this.patientId = patientId1;
    }
}
