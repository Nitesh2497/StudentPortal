package com.example.studentmanagment.Dao;

import com.example.studentmanagment.Model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public List<Studentdetails> getStudentDetails() {
        List<Studentdetails> studentdetailsList = new ArrayList<>();
        studentRepository.findAll().forEach(studentdetailsList::add);
        return studentdetailsList;
    }

    public Studentdetails getStudentDetail(String id) {
        return studentRepository.findById(id).get();
    }

    public boolean addStudent(Studentdetails studentDetails) {
//        !studentDetails.getAddress().isEmpty()
        studentRepository.save(studentDetails);
        return true;
    }

    public boolean deleteStudent(String studentId) {
        studentRepository.deleteById(studentId);
        return true;
    }
}
