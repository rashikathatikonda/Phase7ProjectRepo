package com.example.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.capstone.entity.Product;
import com.example.capstone.repository.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private  ProductRepository repository;
	@GetMapping
	public Iterable<Product> getproducts(){
		return repository.findAll();
	}
	
}


