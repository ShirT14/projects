package com.shir.exercise.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shir.exercise.entities.Item;
@Transactional
public interface ItemRepository extends JpaRepository<Item, Integer>{
	

}
