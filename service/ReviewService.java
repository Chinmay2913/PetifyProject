package com.zosh.service;

import java.util.List;

import com.zosh.exception.ProductException;
import com.zosh.modal.Review;
import com.zosh.modal.User;
import com.zosh.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
