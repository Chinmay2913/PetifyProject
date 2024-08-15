package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Address;
import com.app.repository.AddressRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address save(Address address) {
        return addressRepository.save(address);
    }

    public Optional<Address> findById(Long id) {
        return addressRepository.findById(id);
    }

    public List<Address> findByUserId(Long userId) {
        return addressRepository.findByUserId(userId);
    }

    public void deleteById(Long id) {
        addressRepository.deleteById(id);
    }
    
    public List<Address> findAll(){
    	
    	return addressRepository.findAll();
    }
}
