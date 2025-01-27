const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/reviews.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");


const validateReview = (req, res, next) => {
    let { err } = reviewSchema.validate(req.body);
    if (err) {
      let errMsg = err.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errMsg);
    } else {
      next();
    }
  };


//reviews
//post review route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    res.redirect(`/listings/${listing.id}`);
  })
);

//delete review route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  })
);


module.exports = router;