/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Security.Service;

import com.example.demo.Security.Entity.Rol;
import com.example.demo.Security.Enums.RolNombre;
import com.example.demo.Security.Repository.IRolRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Aylen
 */
@Service
@Transactional
public class RolService {
    @Autowired
    IRolRepository irolrepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolrepository.findByRolNombre(rolNombre);
    }
    public void save (Rol rol){
        irolrepository.save(rol);
    }
}