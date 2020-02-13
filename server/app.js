const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const db = require('../db');

app.use(express.json());
// app.use(express.static('./public'));

app.use('/', expressStaticGzip('./public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));


app.get('/details/:id', (req, res) => {
  db.fetchDocs((err, data) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    const targetId = req.params.id;
    let targetData;

    for (let i = 0; i < data.length; i += 1) {
      // eslint-disable-next-line radix
      if (parseInt(data[i].id) === parseInt(targetId)) {
        targetData = data[i];
        break;
      }
    }
    res.status(200).json(targetData);
  });
});

//POST - create new item
  //want to post new request body
app.post('/details', (req, res) => {
  const newItemData = [];
  for (let i = 0; i < req.body.length; i += 1) {
  newItemData = db.push(req.body[i]);
    //or need to make a new instance?
  }
  db.insertMany(newItemData, (err, result) => {
    if (error) {
      console.log('POST REQ ERROR: ', error);
      res.sendStatus(404);
    } else {
      res.json(res)
    }
  })
});

//PUT - update an existing item
app.put('details/:id', (req, res) => {
  const itemId = req.params.id;
  //the experience id        the updates in the req body
  db.updateOne({id: itemId}, req.body, (error, result) => {
    if (error) {
      console.log('PUT REQ ERROR: ', error);
      res.sendStatus(404); //not found - can't update
    } else {
      //I think I have to convert response to json? not using axios
      console.log('the res.json(result) of put req is ', res.json(result));
      res.json(result);
    };
  })
})

//DELETE - delete an item
app.delete('/details/:id', (req, res) => {
  const itemId = req.params.id;
  dd.DeleteOne({id: itemId}, (error, result) => {
    if (error) {
      console.log('DELETE REQ ERROR: ', error);
      res.sendStatus(404); //cant find - cant delete
    } else {
      console.log('the res.json(result) "', res.json(result), '" was deleted');
      res.json(result);
    }
  });
});

module.exports = app;
