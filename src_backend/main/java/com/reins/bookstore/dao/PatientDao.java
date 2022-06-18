package com.reins.bookstore.dao;
import com.reins.bookstore.entity.Patient;

import java.util.List;
public interface PatientDao {
    Patient findOne(Integer ID);
}
