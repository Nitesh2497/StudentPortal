package com.example.studentmanagment.Controller;

import com.example.studentmanagment.Dao.LoginRepositoryFacadeImpl;
import com.example.studentmanagment.Dao.StudentService;
import com.example.studentmanagment.Model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    LoginRepositoryFacadeImpl loginService;

    @Autowired
    StudentService studentService;

    @PostMapping("/login")
    public boolean userLogin(@RequestBody Login login){
        return loginService.findUser(login);
//        if(loginService.findUser(login)){
//            return "logged in";
//        }else{
//            return "";
//        }
    }

    @PostMapping("/register")
    public boolean registerUser(@RequestBody Login login){
        return loginService.registerUser(login);
    }

}
