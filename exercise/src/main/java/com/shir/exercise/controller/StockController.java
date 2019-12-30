package com.shir.exercise.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.shir.exercise.entities.Item;
import com.shir.exercise.repository.ItemService;

@RestController
@RequestMapping(value = "api/")
public class StockController {
	@Autowired
	private ItemService itemService;

	
	@PutMapping("item")
	public void addItem(@RequestBody Item item) {
		itemService.addItem(item);
	}

	@GetMapping("item/{id}")
	public Item readItemDetails(@PathVariable(name = "item_no") int itemNo) {
		return itemService.readItemDetails(itemNo);
	}

	@GetMapping("stock")
	public List<Item> viewAllItems() {
		return itemService.viewAllItems();
	}

	@DeleteMapping("delete/{id}")
	public void deleteItem(@PathVariable(name = "id") int itemNo) {
		itemService.deleteItem(itemNo);
	}

	@PutMapping("deposit/{amount}")
	public void deposit(@PathVariable(name = "amount") int amount, @RequestBody Item item) {
		itemService.deposit(amount, item);
	}

	@PutMapping("withdrawal/{amount}")
	public void withdrawal(@PathVariable(name = "amount") int amount, @RequestBody Item item) {
		itemService.withdrawal(amount, item);
	}
}
