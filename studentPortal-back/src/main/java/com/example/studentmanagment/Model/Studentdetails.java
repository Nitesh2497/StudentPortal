package com.example.studentmanagment.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Studentdetails {

    @Id
    private String id;
    private String name;
    private String branch;
    private String cgpa;
    private String address;
    private String email; //optional
    private String phone; //optional
    private int landline;//optional

    public Studentdetails(){

    }

    public Studentdetails(String id, String name, String branch, String cgpa, String address) {
        this.id = id;
        this.name = name;
        this.branch = branch;
        this.cgpa = cgpa;
        this.address = address;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public void setEmail(String email) {        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setLandline(int landline) {
        this.landline = landline;
    }

    public int getLandline() {
        return landline;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBranch() {
        return branch;
    }

//
    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getCgpa() {
        return cgpa;
    }

    public void setCgpa(String cgpa) {
        this.cgpa = cgpa;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
