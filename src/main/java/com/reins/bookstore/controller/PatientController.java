package com.reins.bookstore.controller;
import com.reins.bookstore.entity.Book;
import com.reins.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.reins.bookstore.service.PatientService;
import com.reins.bookstore.entity.Patient;
import java.util.List;
import java.util.Map;
@RestController
public class PatientController {
    @Autowired
    private PatientService patientService;

    @RequestMapping("/getPatient")
    public Patient getPatient(@RequestParam("id") Integer id){
        return patientService.findPatientById(id);
    }
}
