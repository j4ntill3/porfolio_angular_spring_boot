/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.demo.Repository;

import com.example.demo.Entity.Header;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aylen
 */
public interface RHeader extends JpaRepository<Header,Integer>{
    public Optional<Header> findByNombreH(String nombreH);
    public boolean existsByNombreH(String nombreH);
    
}
