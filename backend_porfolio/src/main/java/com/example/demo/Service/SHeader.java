/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Service;

import com.example.demo.Entity.Header;
import com.example.demo.Repository.RHeader;
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
public class SHeader {
    @Autowired RHeader rHeader;
    
     public List<Header> list(){
        return rHeader.findAll();
    }
    
    public Optional<Header> getOne(int id){
        return rHeader.findById(id);
    }
    
    public Optional<Header> getByNombreH(String nombreH){
        return rHeader.findByNombreH(nombreH);
    }
    
    public void save(Header header){
        rHeader.save(header);
    }
    
    public void delete(int id){
        rHeader.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rHeader.existsById(id);
    }
    
    public boolean existsByNombreH(String nombreH){
        return rHeader.existsByNombreH(nombreH);
    }
    
}
