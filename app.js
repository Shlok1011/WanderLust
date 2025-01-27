const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listings = require("./routes/listings.js");
const reviews = require("./routes/reviews.js");

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

//routes
app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);


app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  //res.status(statusCode).send(message);
});

let port = 8080;
app.listen(port, () => {
  console.log(`Listening to port:${port}`);
});




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

