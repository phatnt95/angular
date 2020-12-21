package dev.springboot.service;

import dev.springboot.model.Contact;
import dev.springboot.repository.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    private ContactRepo contactRepository;

    @Override
    public Iterable<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public List<Contact> search(String term) {
        return null;
    }

    @Override
    public Contact findOne(Integer id) {
        return contactRepository.findById(id).orElseThrow(()-> {
            return new IllegalArgumentException("Du lieu khong ton tai trong he thong");
        });
    }

    @Override
    public void add(Contact contact) {
        try{
            contactRepository.save(contact);
        } catch (Exception ex){
            ex.printStackTrace();
        }
    }

    @Override
    public void edit(Contact contact, long id) {

    }

    @Override
    public void delete(Integer id) {
        contactRepository.deleteById(id);
    }
}
