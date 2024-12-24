const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {
  validateListing,
  isLoggedIN,
  isOwner,
} = require("../utils/middleware.js");

//Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({}).populate("owner");
    res.render("listings/index.ejs", { allListings });
  })
);

//New Route
router.get("/add", isLoggedIN, (req, res, next) => {
  res.render("listings/newHouse.ejs");
});

//Create Route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing is created!!");
    console.log(newListing);
    res.redirect("/listings");
  })
);

//Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Page you requsted for does not exsist");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
  })
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIN,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Page you requsted for does not exsist");
      res.redirect("/listings");
    }

    res.render("listings/edit.ejs", { listing });
  })
);

//Update Route
router.put(
  "/:id", 
  validateListing,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing is updated!!");
    res.redirect(`/listings/${id}`);
  })
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIN,
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", "Listing is deleted!!");
    res.redirect("/listings");
  })
);

module.exports = router;
