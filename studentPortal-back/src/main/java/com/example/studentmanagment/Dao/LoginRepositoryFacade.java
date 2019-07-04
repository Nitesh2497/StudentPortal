package com.example.studentmanagment.Dao;

import com.example.studentmanagment.Model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepositoryFacade extends JpaRepository<Login,String> {
}

