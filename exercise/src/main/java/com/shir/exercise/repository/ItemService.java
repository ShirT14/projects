package com.shir.exercise.repository;

import java.util.List;

import org.springframework.stereotype.Service;

import com.shir.exercise.entities.Item;

public interface ItemService {

	public List<Item> viewAllItems();

	public Item readItemDetails(int itemNo);

	public void withdrawal(int amount, Item item);

	public void deposit(int amount, Item item);

	public void addItem(Item item);

	public void deleteItem(int itemNo);

}
