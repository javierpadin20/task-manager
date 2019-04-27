'use strict'

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


/** GET */ 

/* 
   /api/tasks
   Query Params: state
   Retorna una lista de tareas, puede filtrarse por estado. 
*/ 
app.get('/api/tasks', (req, res) => {
  //res.send(`[GET] Lista de tareas - query params: ${req.query.state}`);
  res.send(200, {tasks: []});
});

/* 
  /api/tasks/:id
  Params: id [Id de la tarea]
  Devuelve una tarea especifica.
*/
app.get('/api/tasks/:id', (req, res) => {
  res.send(`[GET] Tarea ID ${req.params.id}`);
});

/** POST */
/* 
   /api/tasks
   Crea una tarea.
   Atributos: title, description.
*/
app.post('/api/tasks', (req, res) => {
  //res.send(`[POST] Tarea "${req.query.title}" creada. \n Descripcion: ${req.query.description}`);
  console.log(req.body)
  res.status(200).send({message: 'La tarea se ha creado.'})
});

/** PUT */
/* 
   /api/tasks
   Actualiza una tarea.
   Atributos: title, description.
*/
app.put('/api/tasks/:id', (req, res) => {
  res.send(`[PUT] Tarea ${req.params.id} actualizada.`);
});

/** DELETE */
/* 
   /api/tasks
   Actualiza una tarea.
   Atributos: title, description.
*/
app.delete('/api/tasks/:id', (req, res) => {
  res.send(`[DELETE] Tarea ${req.params.id} borrada.`);
});



// Server Start
app.listen(port, () => {
 console.log(`El servidor está inicializado en http://localhost:${port}`);
})