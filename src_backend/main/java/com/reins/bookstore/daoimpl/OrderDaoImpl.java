package com.reins.bookstore.daoimpl;

import com.reins.bookstore.dao.OrderDao;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.Orderinstance;
import com.reins.bookstore.entity.Patient;
import com.reins.bookstore.repository.OiRepository;
import com.reins.bookstore.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

/**
 * @ClassName BookDaoImpl
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/5 20:20
 */
@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OiRepository oir;

    @Override
    public Order addOrder(Order order) {
        return orderRepository.saveAndFlush(order);
    }

    @Override
    public Order findOrderById(Integer id) {
        return orderRepository.getOne(id);
    }

    @Override
    public Orderinstance addoi(Integer did, Integer pid, String dname, String pname, String time, String dpmt) {
        Orderinstance o1 = new Orderinstance();

        o1.setDocid(did);
        o1.setPatid(pid);
        o1.setDocname(dname);
        o1.setPatname(pname);
        o1.setTime(time);
        o1.setDepartment(dpmt);
        o1.setDescription("阶段1：");
        return oir.saveAndFlush(o1);
    }

    @Override
    public List<Orderinstance> getonesorder(Integer u) {
        List<Orderinstance> l1 = oir.findAll();
        List<Orderinstance> l2 = new ArrayList<>();
        for (int i = 0; i < l1.size(); i++) {
            Orderinstance ci = l1.get(i);
            // System.out.println(ci.getbookId());
            if (Objects.equals(ci.getPatid(), u)) {
                l2.add(ci);
                System.out.println(ci);
                // patientReposity.saveAndFlush(ci);
            }
        }
        return l2;
    }

    @Override
    public void deleteorder(Integer i) {
        oir.deleteById(i);
    }
}
