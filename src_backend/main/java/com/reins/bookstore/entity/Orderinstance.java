package com.reins.bookstore.entity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;


import javax.persistence.*;
@Data
@Entity
@Table(name = "`orderinstance`")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "oiid")
public class Orderinstance {
    @Id
    @Column(name = "oiid")
    private int oiid;
    private Integer docid;
    private Integer patid;
    private String docname;
    private String patname;
    private String time;
    private String department;
    private String description;

}
