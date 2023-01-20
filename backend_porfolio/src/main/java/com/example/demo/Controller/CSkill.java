/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Controller;

import com.example.demo.Dto.dtoSkill;
import com.example.demo.Entity.Skill;
import com.example.demo.Security.Controller.Mensaje;
import com.example.demo.Service.SSkill;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Aylen
 */
@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = "http://localhost:4200")
public class CSkill {
    @Autowired
    SSkill sSkill;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Skill>> list(){
        List<Skill> list = sSkill.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Skill> getById(@PathVariable("id")int id){
        if(!sSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }
        
        Skill skill = sSkill.getOne(id).get();
        return new ResponseEntity(skill, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id){
        if(!sSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        sSkill.delete(id);
        return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoSkill dtoskill){
        if(StringUtils.isBlank(dtoskill.getNombreS())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(sSkill.existsByNombreS(dtoskill.getNombreS())){
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        
        Skill skill = new Skill(
                dtoskill.getNombreS(), dtoskill.getPorcentaje());
        sSkill.save(skill);
        return new ResponseEntity(new Mensaje("Skill creada"), HttpStatus.OK);
                
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoSkill dtoskill){
        if(!sSkill.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if(sSkill.existsByNombreS(dtoskill.getNombreS()) && sSkill.getByNombreS(dtoskill.getNombreS()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtoskill.getNombreS())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        
        Skill skill = sSkill.getOne(id).get();
        
        skill.setNombreS(dtoskill.getNombreS());
        skill.setPorcentaje(dtoskill.getPorcentaje());

        
        sSkill.save(skill);
        
        return new ResponseEntity(new Mensaje("Skill actualizada"), HttpStatus.OK);
    }
    
}
