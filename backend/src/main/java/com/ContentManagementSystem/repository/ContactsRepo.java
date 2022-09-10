package com.ContentManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ContentManagementSystem.entity.Contacts;


public interface ContactsRepo extends JpaRepository<Contacts, String> {

}
