package com.zosh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zosh.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
