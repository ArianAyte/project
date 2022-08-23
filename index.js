const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/book/show', (req, res) => {
  res.json(
    [
      {
      "id": 1,
      "name": "Guerra y Paz",
      "desc": "Este libro habla sobre estos dos grandes temas la guerra y la paz",
      "reseña":"Una lectura muy tranquila"
    },
    {
      "id": 2,
      "name": "El discurso del metodo",
      "desc": "Este libro lo escribio el gran filosofo rene descartes",
      "reseña":"Muy buen libro"
    },
    {
      "id": 3,
      "name": "Los 4 acuerdos",
      "desc": "libro de filosofia mexicana",
      "reseña":"Muy bueno, grandes enseñansaz trasmite este libro"
    }
  ]
  );
});

app.get('/book/show/:id', (req, res) => {
  const id = req.params.id;
  res.json(id);
});

app.post('/book/create', (req, res) => {
  const {book_name, desc,reseña,id} = req.body;
  console.log("saving book: ", book_name);
  res.json({
    "id": id,
    "name": book_name,
    "desc": desc,
    "reseña": reseña
  });
});

app.put('/book/update/:id', (req, res) => {
  const id = req.params.id;
  const {desc, book_name,reseña} = req.body;
  console.log("updating book: ", book_name);
  res.json({
    "id": id,
    "name": book_name,
    "description": desc,
    "reseña": reseña
  });
});

app.delete('/book/delete/:book_name', (req, res) => {
  const params = req.params;
  console.log("deleting book: ", params);
  res.json({
    "name": params.book_name,
  });
});

app.listen(port, () => {
  console.log(`Port is ${port}`)
});


