const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

main().then((res)=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}



app.get("/",(req,res)=>{
    res.send("working properly");
});


//index rout
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

//New route
app.get("/listing/new",(req,res)=>{
    res.render("listings/createNew.ejs");
});

//Show route
app.get("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    const showData = await Listing.findById(id);
    res.render("listings/show.ejs",{showData});
});

//creating new data
app.post("/listings",async(req,res)=>{
   // let {title,description,image,price,country,location} = req.body;
   let newListing = new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
});

//Edit rout
app.get("/listing/:id/edit",async (req,res)=>{
    let {id} = req.params;
    const Data = await Listing.findById(id);
    res.render("listings/edit.ejs",{Data});
});

//update route
app.put("/listings/:id",async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id ,  {...req.body.Data});
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id/delete",async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
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

let port = 8080;
app.listen(port ,()=>{
    console.log(`Listening to port:${port}`);
});