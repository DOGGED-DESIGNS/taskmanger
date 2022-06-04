const model = require("../models/model");

function getall(req, res) {
  // retrieving the all the data from the database

  const query = req.query.id;

  if (query) {
    model
      .findById(query)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send("the query did not work");
      });
  } else {
    model
      .find()
      .then((data) => {
        res.status(200).send(data);
        console.log("you got all");
      })
      .catch((err) => {
        res.status(500).send("getting all data was not sucessfull");
      });
  }
}

// post function

function post(req, res) {
  console.log(req.body);
  // posting data in to the database

  const savingintodatabase = new model({
    task: req.body.task,
  });

  savingintodatabase
    .save()
    .then(() => {
      res.status(200).send("save successfully into the database");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("it was not saves succefully into the database");
    });
}

// delete users

function deleteUser(req, res) {
  const deleteId = req.params.id;

  model
    .findByIdAndDelete(deleteId)
    .then(() => {
      res.status(200).send("data has been deleted sucessfully");
    })
    .catch((err) => {
      res.status(500).send("oga your data refused to be deletes");
    });
}

// put

function put(req, res) {
  const updater = req.params.id;

  const updateee = req.body;

  model
    .findByIdAndUpdate(updater, updateee)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = {
  getall,
  deleteUser,
  put,
  post,
};
