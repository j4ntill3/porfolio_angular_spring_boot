/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Controller;

import com.example.demo.Dto.dtoHeader;
import com.example.demo.Entity.Header;
import com.example.demo.Security.Controller.Mensaje;
import com.example.demo.Service.SHeader;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Aylen
 */
@RestController
@RequestMapping("/header")
@CrossOrigin(origins = "http://localhost:4200")
public class CHeader {
    @Autowired
    SHeader sHeader;

    @GetMapping("/lista")
    public ResponseEntity<List<Header>> list() {
        List<Header> list = sHeader.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<Header> getById(@PathVariable("id") int id) {
        if (!sHeader.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.BAD_REQUEST);
        }

        Header header = sHeader.getOne(id).get();
        return new ResponseEntity(header, HttpStatus.OK);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoHeader dtoheader) {
        if (!sHeader.existsById(id)) {
            return new ResponseEntity(new Mensaje("No existe el ID"), HttpStatus.NOT_FOUND);
        }
        if (sHeader.existsByNombreH(dtoheader.getNombreH()) && sHeader.getByNombreH(dtoheader.getNombreH()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Ese nombre ya existe"), HttpStatus.BAD_REQUEST);
        }
        if (StringUtils.isBlank(dtoheader.getNombreH())) {
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }

        Header header = sHeader.getOne(id).get();

        header.setNombreH(dtoheader.getNombreH());
        header.setUrlP(dtoheader.getUrlP());

        sHeader.save(header);

        return new ResponseEntity(new Mensaje("Persona actualizada"), HttpStatus.OK);
    }

    
}
