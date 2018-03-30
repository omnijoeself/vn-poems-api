var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
  
  readerId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  poemId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  response: {
    type: String
  },
  createdAt: {
    type: Number,
    default: null
  }

});

//instance methods here..
// ResponseSchema.methods.addNewResponse = function(arg){
//   const response = this;
  
//   response.stats.responses = response.stats.responses.concat([arg]);

//   return response.save().then(() => {
//     return arg;
//   });
// };

//before saving new instances updated the createdAt value

ResponseSchema.pre('save', function(next) {
  var response = this;

  response.createdAt = Date.now();
  
 
  next();
});

var Response = mongoose.model('response', ResponseSchema);

module.exports = { Response };