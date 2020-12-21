package dev.springboot.service;

import dev.springboot.model.Contact;

import java.util.List;


public interface ContactService {
    Iterable<Contact> findAll();

    List<Contact> search(String term);

    Contact findOne(Integer id);

    void add(Contact contact);

    void edit(Contact contact, long id);

    void delete(Integer id);
}
