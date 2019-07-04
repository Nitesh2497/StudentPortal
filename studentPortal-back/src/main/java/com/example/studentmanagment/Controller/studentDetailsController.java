package com.example.studentmanagment.Controller;

import com.example.studentmanagment.Dao.StudentService;
import com.example.studentmanagment.Model.Studentdetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class studentDetailsController {

    @Autowired
    StudentService studentService;

    @RequestMapping("/listStudents")
    public List<Studentdetails> getStudents(){
        return studentService.getStudentDetails();
    }

    @RequestMapping("/listStudents/showStudentDetails/{id}")
    public Studentdetails getStudent(@PathVariable String id){
        return studentService.getStudentDetail(id);
    }

    @PostMapping("/listStudents/addStudent")
    public boolean addStudent(@RequestBody Studentdetails studentDetails, Model model){
        return studentService.addStudent(studentDetails);
//        return false;
    }

    @RequestMapping("/listStudents/deleteStudent/{studentId}")
    public boolean deleteStudent(@PathVariable String studentId,Model model){
        return studentService.deleteStudent(studentId);
    }


}
