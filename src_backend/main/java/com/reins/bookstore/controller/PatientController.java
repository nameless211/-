package com.reins.bookstore.controller;

import com.reins.bookstore.dao.PatientDao;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.entity.Orderinstance;
import com.reins.bookstore.repository.PatientReposity;
import com.reins.bookstore.service.BookService;
import com.reins.bookstore.utils.msgutils.Msg;
import com.reins.bookstore.utils.msgutils.MsgCode;
import com.reins.bookstore.utils.msgutils.MsgUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.reins.bookstore.service.PatientService;
import com.reins.bookstore.entity.Patient;

import java.util.*;

@RestController
public class PatientController {
    @Autowired
    private PatientService patientService;
    @Autowired
    private PatientReposity patientReposity;

    @RequestMapping("/getPatient")
    public Patient getPatient(@RequestParam("id") Integer id) {
        return patientService.findPatientById(id);
    }

    @RequestMapping("/getPD")
    public List<Patient> getPD(@RequestBody String data) {
        List<Patient> L0=patientReposity.findAll();
        List<Patient> l1=new ArrayList<>();
        for (int i = 0; i < L0.size(); i++) {
            Patient ci = L0.get(i);
            // System.out.println(ci.getbookId());
            if (!Objects.equals(ci.getUtype(), 2)) {
                l1.add(ci);
            }
        }
        System.out.println(l1);
        return l1;
    }

    @RequestMapping("/change")
    public Msg changemsg(@RequestBody String data) {
        JSONObject js = JSONObject.fromObject(data);
        System.out.println(js);
        JSONObject js2 = js.getJSONObject("values");
        System.out.println(js2);

        Integer u = js.getInt("id");
        String b = js2.getString("phonenumber");
        String n = js2.getString("age");
        String a = js2.getString("address");
        String descripton = js2.getString("ds");
//        String dname=js.getString("dn");
//        String pname=js.getString("pn");
        List<Patient> clist = patientReposity.findAll();
        for (int i = 0; i < clist.size(); i++) {
            Patient ci = clist.get(i);
            // System.out.println(ci.getbookId());
            if (Objects.equals(ci.getId(), u)) {
                ci.setAddress(a);
                ci.setAge(n);
                ci.setTel(b);
                ci.setDescription(descripton);
                System.out.println(ci);
                patientReposity.saveAndFlush(ci);
//                Integer number=ci.getbooknum();
//                number=number+1;
//                ci.setbooknum(number);
//                Double prices=ci.getprice();
//                prices+=price;
//                ci.setprice(prices);
//                CR.saveAndFlush(ci);
//                return ci;
            }
        }
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }

    @RequestMapping("/deluser")
    public Msg deluser(@RequestBody  String data) {
        JSONObject js = JSONObject.fromObject(data);
        //System.out.println(js);
        Integer u= js.getInt("a");
        patientReposity.deleteById(u);
        return MsgUtil.makeMsg(MsgCode.SUCCESS);
    }
}
