package com.reins.bookstore.repository;
import com.reins.bookstore.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface PatientReposity extends JpaRepository<Patient,Integer>{

}
