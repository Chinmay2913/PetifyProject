package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.entities.Rating;
import com.app.exception.ResourceNotFoundException;
import com.app.service.RatingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @PostMapping
    public ResponseEntity<Rating> createRating(@RequestBody Rating rating) {
        Rating savedRating = ratingService.save(rating);
        return new ResponseEntity<>(savedRating, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rating> getRatingById(@PathVariable Long id) {
        Optional<Rating> rating = ratingService.findById(id);
        return rating.map(ResponseEntity::ok)
                     .orElseThrow(() -> new ResourceNotFoundException("Rating not found with id " + id));
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getRatingsByProduct(@PathVariable Long productId) {
        List<Rating> ratings = ratingService.findByProductId(productId);
        if (ratings.isEmpty()) {
            throw new ResourceNotFoundException("No ratings found for product id " + productId);
        }
        return new ResponseEntity<>(ratings, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Rating>> getAllRatings() {
        List<Rating> ratings = ratingService.findAll();
        return new ResponseEntity<>(ratings, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRatingById(@PathVariable Long id) {
        ratingService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
