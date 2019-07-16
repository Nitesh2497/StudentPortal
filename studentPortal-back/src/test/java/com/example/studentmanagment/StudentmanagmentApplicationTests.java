package com.example.studentmanagment;

import com.example.studentmanagment.Dao.LoginRepositoryFacadeImpl;
import com.example.studentmanagment.Dao.StudentService;
import com.example.studentmanagment.Model.Login;
import com.example.studentmanagment.Model.Studentdetails;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class StudentmanagmentApplicationTests {

    @Autowired
    LoginRepositoryFacadeImpl loginService;

    @Autowired
    StudentService studentService;

    @Test
    public void contextLoads() {
        Login login = new Login();
        login.setUsername("admin");
        login.setPassword("root");

        Assert.assertTrue(loginService.findUser(login));
    }
//
//    @Test
//    public void validateStudentDetailsById() {
////        Studentdetails studentdetails = new Studentdetails();
//        Assert.assertNotNull(studentService.getStudentDetail("1"));
//    }
//
//    @Test
//    public void validateDeleteStudent(){
//        Assert.assertTrue(studentService.deleteStudent("1"));
//    }

    @Test
    public void validateAddStudent(){
        Studentdetails studentdetails = new Studentdetails();
        studentdetails.setId("3");
        studentdetails.setName("Ankit");
        studentdetails.setAddress("Delhi");
        studentdetails.setBranch("CS");
        studentdetails.setCgpa("8");
        Assert.assertTrue(studentService.addStudent(studentdetails));
    }
}
