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
public class dtoExperiencia {
    @NotBlank
    private String nombreE;
    @NotBlank
    private String puesto;
    @NotBlank
    private String descripcionE;
    @NotBlank
    private String imgE;
    @NotBlank
    private String anioInicio;
    @NotBlank
    private String anioFin;
    
    public dtoExperiencia(){
        
    }

    public dtoExperiencia(String nombreE, String puesto, String descripcionE, String imgE, String anioInicio, String anioFin) {
        this.nombreE = nombreE;
        this.puesto = puesto;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.anioInicio = anioInicio;
        this.anioFin = anioFin;
    }

    
    
    
}
