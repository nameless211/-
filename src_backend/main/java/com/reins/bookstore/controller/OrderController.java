package com.reins.bookstore.controller;

import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.dao.OrderDao;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.Orderinstance;
import com.reins.bookstore.entity.Patient;
import com.reins.bookstore.entity.UserAuth;
import com.reins.bookstore.repository.OiRepository;
import com.reins.bookstore.repository.OrderRepository;
import com.reins.bookstore.repository.PatientReposity;
import com.reins.bookstore.service.OrderService;

import com.reins.bookstore.utils.msgutils.Msg;
import com.reins.bookstore.utils.msgutils.MsgCode;
import com.reins.bookstore.utils.msgutils.MsgUtil;
import com.reins.bookstore.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
import java.util.Objects;


@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OiRepository oir;
    @Autowired
    private PatientReposity pr;


    @RequestMapping("/getOrder")
    public Order getBook(@RequestParam("id") Integer id) {
        return orderService.findOrderById(id);
    }

    @RequestMapping("/oiload")
    public Msg addoi(@RequestBody String data) {
        JSONObject js = JSONObject.fromObject(data);
        //System.out.println(js);
        Integer u = js.getInt("did");
        Order o0=orderRepository.getOne(u);
        if(Objects.equals(0,o0.getCapacity())){
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
        Integer b = js.getInt("pid");
        String n = js.getString("dpmt");
        String time = js.getString("tm");
        String dname = js.getString("dn");


        Integer cap= o0.getCapacity()-1;
        o0.setCapacity(cap);
        orderRepository.saveAndFlush(o0);

        List<Patient> l1 = pr.findAll();
        Patient p0;
        for (int i = 0; i < l1.size(); i++) {
            p0 = l1.get(i);
            // System.out.println(ci.getbookId());
            if (Objects.equals(p0.getId(), b)) {
                String pname = p0.getName();
                System.out.println();
                Orderinstance oi = orderDao.addoi(u, b, dname, pname, time, n);
                // patientReposity.saveAndFlush(ci);
            }
        }
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }

    @RequestMapping("/getonesorder")
    public List<Orderinstance> getonesorder(@RequestBody String data) {
        JSONObject js = JSONObject.fromObject(data);
        Integer u = js.getInt("a");
        return orderDao.getonesorder(u);
    }

    @RequestMapping("/gdo")
    public List<Orderinstance> getdorder(@RequestBody String data) {
//        JSONObject js = JSONObject.fromObject(data);
//        Integer u= js.getInt("a");
        return oir.findAll();
    }

    @RequestMapping("/cgd")
    public void changedes(@RequestBody String data) {
        JSONObject js = JSONObject.fromObject(data);
        Integer u = js.getInt("oid");
        String str = js.getString("des");

        List<Orderinstance> l1 = oir.findAll();
        Orderinstance p0;
        for (int i = 0; i < l1.size(); i++) {
            p0 = l1.get(i);

            if (Objects.equals(p0.getOiid(), u)) {
                String str0=p0.getDescription();
                str=str0+"\n"+str;
                p0.setDescription(str);
                oir.saveAndFlush(p0);
            }
        }
        return;
    }

    @RequestMapping("/deleteoneorder")
    public Msg deleteorder(@RequestBody String data) {
        JSONObject js = JSONObject.fromObject(data);
        //System.out.println(js);
        Integer u = js.getInt("a");
        orderDao.deleteorder(u);
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }
}
