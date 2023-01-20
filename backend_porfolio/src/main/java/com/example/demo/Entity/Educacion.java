/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Aylen
 */
@Getter @Setter
@Entity
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String descripcionE;
    private String img;
    private int anioInicio;
    private int anioFin;
    private String carrera;
    

    public Educacion() {
    }

    public Educacion(String nombreE, String descripcionE, String img, int anioInicio, int anioFin, String carrera) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.carrera = carrera;
    }
    
    

    

    
    
}

