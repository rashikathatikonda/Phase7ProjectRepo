package com.example.capstone.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.capstone.entity.Product;

public interface ProductRepository extends CrudRepository<Product,Integer>{
	List<Product> findByName(String medicinename);
	List<Product> findByPrice(String price);
	List<Product> findByNameAndPrice(String medicinename,Double price);
	

}
