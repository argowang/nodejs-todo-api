const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });


// Todo.findOneAndRemove
// var id = new ObjectID('5aaa1d91b9d764db7a8d2911');
Todo.findByIdAndRemove('5aaa1d91b9d764db7a8d2911').then((todo) => {
  console.log(todo);
});
