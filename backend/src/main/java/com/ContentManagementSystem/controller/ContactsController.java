package com.ContentManagementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ContentManagementSystem.entity.Contacts;
import com.ContentManagementSystem.repository.ContactsRepo;




//@CrossOrigin(origins = "*")
@RestController
public class ContactsController {
	
	@Autowired
	private ContactsRepo contactsRepo;
	
	@PostMapping(path="/contact")
	public Contacts addContact(@RequestBody Contacts contact) {
		return contactsRepo.save(contact);
	}

}