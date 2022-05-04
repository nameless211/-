package com.reins.bookstore.controller;
import com.reins.bookstore.constant.Constant;
import com.reins.bookstore.entity.Order;
import com.reins.bookstore.entity.UserAuth;
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

/**
 * @ClassName BookController
 * @Description TODO
 * @Author thunderBoy
 * @Date 2019/11/6 16:07
 */
@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping("/addOrder")
    public Msg addOrder(@RequestParam("id") Integer id){
        Order order = orderService.findOrderById(id);
        if(order != null){
            if(order.getPatientId() != null){
                return MsgUtil.makeMsg(MsgCode.ORDER_OUT_STOCK_ERROR);
            }
            Integer curUserId = SessionUtil.getUserId();
            if(curUserId != null){
                order.setPatientId(curUserId);
            }
            orderService.addOrder(order);
            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, curUserId);
            obj.put(Constant.Order_ID, id);
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.ORDER_SUCCESS_MSG, obj);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.ERROR);
        }
    }
    @RequestMapping("/getOrder")
    public Order getBook(@RequestParam("id") Integer id){
        return orderService.findOrderById(id);
    }
}
