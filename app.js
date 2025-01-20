const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/", (req, res) => {
  res.send("working properly");
});

//index rout
app.get("/listings", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
})
);

//New route
app.get("/listing/new",(req, res) => {
  res.render("listings/createNew.ejs");
});

//Show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const showData = await Listing.findById(id);
  res.render("listings/show.ejs", { showData });
})
);

//creating new data
app.post("/listings", wrapAsync (async (req, res,next) => {
  // let {title,description,image,price,country,location} = req.body;
    if(!req.body.listing){
      throw new ExpressError(400,"send valid data for listing")
    }
    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
);

//Edit rout
app.get("/listing/:id/edit", wrapAsync(async (req, res) => {
  let { id } = req.params;
  const Data = await Listing.findById(id);
  res.render("listings/edit.ejs", { Data });
})
);

//update route
app.put("/listings/:id", wrapAsync(async (req, res) => {
  if(!req.body.listing){
    throw new ExpressError(400,"send valid data for listing")
  }
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.Data });
  res.redirect(`/listings/${id}`);
})
);

//delete route
app.delete("/listings/:id/delete", wrapAsync(async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
})
);
// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new listing({
//         title: "My new villa",
//         description:"By the beach",
//         price:1200,
//         location:"calangute , goa",
//         country:"India",
//     })
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("successful testing");
// });

app.all("*" , (req,res,next)=>{
  next(new ExpressError(404 , "Page not found!"))
});

app.use((err,req,res,next) => {
  let {statusCode=500 , message="Something went wrong!"} =err;
  res.status(statusCode).send(message);
});

let port = 8080;
app.listen(port, () => {
  console.log(`Listening to port:${port}`);
});
