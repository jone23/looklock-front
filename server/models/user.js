const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    address : {type: String, required:true},
    isAdmin: {type:Boolean, default:false}, 
},
{
    timestamps: true,
    collection:'users' 
});

userSchema.statics.findByAddress = function(address) {
    try {
        const result = this.find({address: address});
        console.log(result);
        return result;
    } catch(err) {
        throw err;
    }
};

userSchema.statics.create = function(payload) {
    try {
        const user = new this(payload);
        return user.save();
    } catch (err) {
        return err;
    }
};

userSchema.statics.updateByAddress = function(account, payload) {
    const user =  this.findOneAndUpdate({address : account}, payload, {new:true});
    return user;
};

module.exports =  mongoose.model('User', userSchema);

// https://poiemaweb.com/mongoose