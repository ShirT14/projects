package com.shir.exercise.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.validator.constraints.UniqueElements;

@Entity

public class Item {
	public Item(String name, int amount, @UniqueElements int inventory_code) {
		super();
		this.name = name;
		this.amount = amount;
		this.inventory_code = inventory_code;
	}

	public int getItem_no() {
		return item_no;
	}

	public void setItem_no(int item_no) {
		this.item_no = item_no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Item() {
		super();
	}

	public Item(int item_no, String name, int amount, int inventory_code) {
		super();
		this.item_no = item_no;
		this.name = name;
		this.amount = amount;
		this.inventory_code = inventory_code;
	}

	public int getInventory_code() {
		return inventory_code;
	}

	public void setInventory_code(int inventory_code) {
		this.inventory_code = inventory_code;
	}

	@Override
	public String toString() {
		return "Item [item_no=" + item_no + ", name=" + name + ", amount=" + amount + ", inventory_code="
				+ inventory_code + "]";
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column

	private int item_no;
	@Column
	private String name;
	@Column
	private int amount;
	@Column(unique = true)

	private int inventory_code;

}
