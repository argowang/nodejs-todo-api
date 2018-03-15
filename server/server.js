var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/user.js');

const {ObjectID} = require('mongodb');
var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //validate id using isValid
  if (!ObjectID.isValid(id)) {
    // 404 if not valid - send back empty send()
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (todo) {
      res.send({todo});
    } else {
      res.status(404).send();
    }
  }, (e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (todo) {
      res.status(200).send({todo});
    } else{
      res.status(404).send();
    }
  }, (e) => {
    res.status(400).send();
  })
})


app.listen(port, () => {
  console.log(`Started on port: ${port}`);
});

module.exports = {app};
