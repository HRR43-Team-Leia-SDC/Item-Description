const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: Number,
  sellerName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSpecs: Object,
  shippingTime: String,
  shippingLoc: String,

}, { collection: 'data' });

module.exports.Product = mongoose.model('Product', productSchema);
