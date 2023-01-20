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
public class dtoPersona {
    @NotBlank
    private String nombre;
    @NotBlank
    private String apellido;
    @NotBlank
    private String perfil;
    @NotBlank
    private String descripcion;
    @NotBlank
    private String img;    
    @NotBlank
    private String imgP;

    public dtoPersona() {
    }

    public dtoPersona(String nombre, String apellido, String perfil, String descripcion, String img, String imgP) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.perfil = perfil;
        this.descripcion = descripcion;
        this.img = img;
        this.imgP = imgP;
    }

    
    
    
}
