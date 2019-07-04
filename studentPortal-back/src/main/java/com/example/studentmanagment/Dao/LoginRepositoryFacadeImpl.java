package com.example.studentmanagment.Dao;
import com.example.studentmanagment.Model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginRepositoryFacadeImpl {
    
    @Autowired
    LoginRepositoryFacade loginRepository;

    public boolean findUser(Login login) {
        Login login1;
        if(loginRepository.findById(login.getUsername()).isPresent()){
           login1 = loginRepository.findById(login.getUsername()).get();
            if(login1.getPassword().equals(login.getPassword())){
                return true;
            }else {
                return false;
            }
        }else{
            return false;
        }
    }

    public boolean registerUser(Login login) {
        loginRepository.save(login);
        return true;
    }
}
