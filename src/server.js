const express = require("express"),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  uuid = require('uuid/v1');

const app = express();

let postList = [{
  "_id": uuid(),
  "title": 1,
  "body": 11
}];
const defaultRoute = express.Router();

defaultRoute.route('/').get((req, res) => {
  res.status(200).json(postList);
});

defaultRoute.route('/').post((req, res) => {
  const newPost = {
    "_id": uuid(),
    "title": req.body.title,
    "body": req.body.body
  };
  postList.push(newPost);
  res.status(200).json(newPost);
});

defaultRoute.route('/').put((req, res) => {
  const newPost = {
    "_id": uuid(),
    "title": req.body.title,
    "body": req.body.body
  };
  const index=postList.findIndex(d=>d._id==req.body._id);
  postList.splice(index,1,newPost);
  res.status(200).json(newPost);
});

defaultRoute.route('/:id').delete((req, res) => {
  console.log(req.params.id);
  const index=postList.findIndex(d=>d._id==req.params.id);
  postList.splice(index,1);
  res.status(200).json(req.params.id);
});


app.use(bodyParser.json());
app.use(cors());
app.use('/posts', defaultRoute);

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});