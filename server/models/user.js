var mongoose = require('mongoose');
// User model
// email - required - trim - set type - set min length of 1

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// var user = new User({
//   email: 'wangjunyi'
// });
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

module.exports = {User};
