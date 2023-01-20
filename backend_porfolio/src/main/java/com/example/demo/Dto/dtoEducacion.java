/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.Dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author Aylen
 */
@Getter @Setter
public class dtoEducacion {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String img;
    @NotBlank
    private int anioInicio;
    @NotBlank
    private int anioFin;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String carrera;

    public dtoEducacion() {
    }

    public dtoEducacion(String nombreE, String descripcionE, String img, int anioInicio, int anioFin, String descripcion, String carrera) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
        this.descripcion = descripcion;
        this.carrera = carrera;
    }

    

    
    
    

    
    
}
