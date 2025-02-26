const Review = require ("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
  
    await listing.save();
    await newReview.save();
    req.flash("success","New Review created!");
    res.redirect(`/listings/${listing.id}`);
  };

module.exports.destroyReview = async (req, res) => {
    let { id, reviewId } = req.params;
    req.flash("success","Review Deleted!");
    
    await Listing.findByIdAndUpdate(id, { pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
  };  