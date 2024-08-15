package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Rating;
import com.app.repository.RatingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating save(Rating rating) {
        return ratingRepository.save(rating);
    }

    public List<Rating> findByProductId(Long productId) {
        return ratingRepository.findByProductId(productId);
    }

    public void deleteById(Long id) {
        ratingRepository.deleteById(id);
    }

	public Optional<Rating> findById(Long id) {
		return ratingRepository.findById(id);
	}

	public List<Rating> findAll() {
		return ratingRepository.findAll();
	}
}
