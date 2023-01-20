/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.demo.Repository;

import com.example.demo.Entity.Skill;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aylen
 */
public interface RSkill extends JpaRepository<Skill, Integer>{
    public Optional<Skill> findByNombreS(String nombreS);
    public boolean existsByNombreS(String nombreS);
}
