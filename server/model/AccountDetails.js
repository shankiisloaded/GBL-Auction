const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var accountDetails = new mongoose.Schema({
    address: {
      type: String,
      required: true
    },
    balance: {
      type: String,
      required: true
    },

   name:{
      type: string,
      required: true
   }
  },
  {
    collection: 'paymentAccount'
  }
);

mongoose.model('accountDetails', accountDetails);


