// Create web server using express
// Create a route that will handle the POST request to /comments
// Create a route that will handle the GET request to /comments
// Create a route that will handle the GET request to /comments/:id
// Create a route that will handle the PUT request to /comments/:id
// Create a route that will handle the DELETE request to /comments/:id

const express = require('express');
const app = express();
app.use(express.json());

let comments = [];
let commentId = 1;

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = commentId;
  commentId++;
  comments.push(newComment);
  res.status(201).send(newComment);
});

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    comments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, ...req.body, id };
      }
      return comment;
    });
    res.status(200).send({ ...comment, ...req.body, id });
  } else {
    res.status(404).send('Comment not found');
  }
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    comments = comments.filter((comment) => comment.id !== id);
    res.status(204).send();
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




