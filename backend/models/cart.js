const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    itemID:{
        type:String,
        required:true
    },

});

module.exports =  mongoose.model('Item',itemsSchema);