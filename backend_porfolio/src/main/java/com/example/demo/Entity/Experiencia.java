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

@Getter @Setter
@Entity
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreE;
    private String puesto;
    private String descripcionE;
    private String imgE;
    private String anioInicio;
    private String anioFin;
    
    public Experiencia(){}

    public Experiencia(String nombreE, String puesto, String descripcionE, String imgE, String anioInicio, String anioFin) {
        this.nombreE = nombreE;
        this.puesto = puesto;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
    }

    
    
    
    
}
