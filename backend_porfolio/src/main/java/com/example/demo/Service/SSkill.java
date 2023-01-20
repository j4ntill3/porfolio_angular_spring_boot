/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Service;

import com.example.demo.Entity.Skill;
import com.example.demo.Repository.RSkill;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Aylen
 */
@Service
@Transactional
public class SSkill {
    @Autowired
    RSkill rSkill;
    
    public List<Skill> list(){
        return rSkill.findAll();
    }
    
    public Optional<Skill> getOne(int id){
        return rSkill.findById(id);
    }
    
    public Optional<Skill> getByNombreS(String nombreS){
        return rSkill.findByNombreS(nombreS);
    }
    
    public void save(Skill educacion){
        rSkill.save(educacion);
    }
    
    public void delete(int id){
        rSkill.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rSkill.existsById(id);
    }
    
    public boolean existsByNombreS(String nombreS){
        return rSkill.existsByNombreS(nombreS);
    }
    
}
