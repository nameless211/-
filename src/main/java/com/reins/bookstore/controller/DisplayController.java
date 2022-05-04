package com.reins.bookstore.controller;

import com.reins.bookstore.service.DisplayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.reins.bookstore.entity.Display;

import java.util.List;
import java.util.Map;


@RestController
public class DisplayController {
    @Autowired
    private DisplayService displayService;

    @RequestMapping( "/displayAll")
    public List<Display> displayAll()
    {return displayService.displayAll();}

}
