package com.example.studentmanagment.Dao;


import com.example.studentmanagment.Model.Studentdetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Studentdetails,String> {
}
