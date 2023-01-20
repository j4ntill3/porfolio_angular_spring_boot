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
public class dtoSkill {
    @NotBlank
    private String nombreS;
    @NotBlank
    private int porcentaje;

    public dtoSkill() {
    }

    public dtoSkill(String nombreS, int porcentaje) {
        this.nombreS = nombreS;
        this.porcentaje = porcentaje;
    }
    
}
