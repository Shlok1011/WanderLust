const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
  let { err } = listingSchema.validate(req.body);
  if (err) {
    let errMsg = err.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//index rout
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//New route
router.get("/new", (req, res) => {
  res.render("listings/createNew.ejs");
});

//Show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const showData = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { showData });
  })
);

//creating new data
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // let {title,description,image,price,country,location} = req.body;
    let result = listingSchema.validate(req.body);
    if (result.err) {
      throw new ExpressError(400, result.err);
    }
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
  })
);

//Edit rout
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const Data = await Listing.findById(id);
    res.render("listings/edit.ejs", { Data });
  })
);

//update route
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.Data });
    res.redirect(`/listings/${id}`);
  })
);

//delete route
router.delete(
  "/:id/delete",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);

module.exports = router;
