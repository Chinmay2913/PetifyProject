package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Review;
import com.app.repository.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review save(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> findByProductId(Long productId) {
        return reviewRepository.findByProductId(productId);
    }

    public void deleteById(Long id) {
        reviewRepository.deleteById(id);
    }

	public Optional<Review> findById(Long id) {
		return reviewRepository.findById(id);
	}

	public List<Review> findAll() {
		return reviewRepository.findAll();
	}
}
