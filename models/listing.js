const mongoose = require("mongoose")
const Schema = mongoose.Schema
const listingSchema = new Schema({
    
    title: {
        type: String,
        required: true // Make title required
    },
    description: String,
    image: {
        filename: String,
        url: String
      },
  
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
})
const Listing = mongoose.model("listing",listingSchema)
module.exports = Listing