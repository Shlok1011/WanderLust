const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  };

module.exports.renderNewForm =(req, res) => {
    res.render("listings/createNew.ejs");
  };

module.exports.showListing =async (req, res) => {
    let { id } = req.params;
    const showData = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    if (!showData) {
      req.flash("error", "Listing you are requested for does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { showData});
  };  

module.exports.createListing = async (req, res, next) => {
    // let {title,description,image,price,country,location} = req.body;
    let url = req.file.path;
    let filename = req.file.filename;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image ={url , filename};
    await newListing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listings");
  };  

  module.exports.renderEditForm = async (req, res) => {
      let { id } = req.params;
      const Data = await Listing.findById(id);
      if (!Data) {
        req.flash("error", "Listing you are requested for does not exist!");
        res.redirect("/listings");
      }
      res.render("listings/edit.ejs", { Data });
    };

    module.exports.updateListing = async (req, res) => {
        let { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.Data });

        if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image ={url , filename};
        await listing.save();
        }

        req.flash("success", "listing Updated!");
        res.redirect(`/listings/${id}`);
      };

      module.exports.destroyListing = async (req, res) => {
        let { id } = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing Deleted!");
        res.redirect("/listings");
      };