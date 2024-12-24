const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIN,
  isReviewAuthor,
} = require("../utils/middleware.js");

// Add review Route
router.post(
  "/",
  isLoggedIN,
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    console.log(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New review created!!");
    console.log("Review Saved");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Delete review Route
router.delete(
  "/:reviewId",
  isReviewAuthor,
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    console.log(reviewId);
    req.flash("success", "Review is deleted!!");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
