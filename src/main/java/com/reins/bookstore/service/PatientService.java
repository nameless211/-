package com.reins.bookstore.service;
import com.reins.bookstore.entity.Patient;

import java.util.List;

public interface PatientService {
    Patient findPatientById(Integer id);
}
