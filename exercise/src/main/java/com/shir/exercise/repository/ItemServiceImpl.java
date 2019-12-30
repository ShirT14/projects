package com.shir.exercise.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shir.exercise.entities.Item;
@Service
public class ItemServiceImpl implements ItemService{
	@Autowired
	private ItemRepository itemRepository;

	@Override
	public List<Item> viewAllItems() {
	return	this.itemRepository.findAll();
		
	}

	@Override
	public Item readItemDetails(int itemNo) {
	
		return this.itemRepository.getOne(itemNo);
	}

	@Override
	public void withdrawal(int amount, Item item) {
		int newAmount=(item.getAmount())-amount;
		item.setAmount(newAmount);
		this.itemRepository.save(item);
		
	}

	@Override
	public void deposit(int amount, Item item) {
		int newAmount=(item.getAmount())+amount;
		item.setAmount(newAmount);
		this.itemRepository.save(item);
		
	}

	@Override
	public void addItem(Item item) {
		this.itemRepository.save(item);
		
	}

	@Override
	public void deleteItem(int itemNo) {
		this.itemRepository.deleteById(itemNo);
		
		
	}
	

}
