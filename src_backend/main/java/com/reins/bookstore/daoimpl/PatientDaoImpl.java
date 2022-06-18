package com.reins.bookstore.daoimpl;
import com.reins.bookstore.dao.PatientDao;
import com.reins.bookstore.entity.Patient;
import com.reins.bookstore.repository.PatientReposity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public class PatientDaoImpl implements PatientDao{
    @Autowired
    private PatientReposity patientReposity;

    @Override
    public Patient findOne(Integer id){
        return patientReposity.getOne(id);
    }

}
