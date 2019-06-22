const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var ethAccount = new mongoose.Schema({
    id : {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },

    address: {
      type: String,
      required: true
    },
    privateKey: {
      type: String,
      required: true
    },

    publicKey: {
      type: String
    }
  },
  {
    collection: 'ethAccountDetails'
  }
);

mongoose.model('EthAccount', ethAccount);


