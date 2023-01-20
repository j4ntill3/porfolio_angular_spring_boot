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
public class dtoHeader {
    @NotBlank
    private String nombreH;
    @NotBlank
    private String apellido;
    @NotBlank
    private String urlP;

    public dtoHeader() {
    }

    public dtoHeader(String nombreH, String apellido, String urlP) {
        this.nombreH = nombreH;
        this.apellido = apellido;
        this.urlP = urlP;
    }
    
}
