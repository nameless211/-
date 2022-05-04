package com.reins.bookstore.serviceimpl;
import com.reins.bookstore.dao.PatientDao;
import com.reins.bookstore.entity.Patient;
import com.reins.bookstore.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PatientServiceImpl implements PatientService{
    @Autowired
    private PatientDao patientDao;

    @Override
    public Patient findPatientById(Integer id){
        return patientDao.findOne(id);
    }
}
