package com.example.mypkg.controller;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.mypkg.entity.Product;
import com.example.mypkg.service.ProductService;

import net.bytebuddy.asm.Advice.OffsetMapping.Sort;

public class SearchController {
	@Autowired
	private ProductService productService;
	@GetMapping("/search/{nameProduct}")
	public ResponseEntity<?> searchByNameProduct(@PathVariable String nameProduct,
			@PageableDefault(sort = "nameProduct",direction = Direction.ASC)Pageable pageable){
				return null;
		
	}
	
}
