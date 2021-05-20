'use strict'

// API TASK

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var listTasks=[];

var contador = 0;

var respuesta404 = {
  error: true, 
  codigo: 404, 
  mensaje: 'Tarea no encontrada'
 };

/** GET */ 

/* 
   /api/tasks
   Query Params: state
   Retorna una lista de tareas, puede filtrarse por estado. 
*/ 
app.get('/api/tasks', (req, res) => {
  //res.send(`[GET] Lista de tareas - query params: ${req.query.state}`);

  if(listTasks == undefined || listTasks.length < 1)
    res.send(204);
  res.send(200, listTasks);
});

/* 
  /api/tasks/:id
  Params: id [Id de la tarea]
  Devuelve una tarea especifica.
*/
app.get('/api/tasks/:id', (req, res) => {

  var task;

  if(listTasks == undefined || listTasks.length < 1){
    res.send(204);
  }

  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          task = listTasks[i];
          res.status(200).json({
            task
          })
      }
  }
    res.status(404).send(respuesta404);
});

/** POST */
/* 
   /api/tasks
   Crea una tarea.
   Atributos: title, description.
*/
app.post('/api/tasks', (req, res) => {
  
  var task = new Object();
  task.id = contador++;
  task.descripcion = req.body.descripcion;

  listTasks.push(task);

  res.status(200).send({message: `La tarea ha sido creada. ID ${task.id}`})
});

/** PUT */
/* 
   /api/tasks
   Actualiza una tarea.
   Atributos: title, description.
*/
app.put('/api/tasks/:id', (req, res) => {

  if(listTasks == undefined || listTasks.length < 1){
    res.status(404).send(respuesta404);
  }
  var taskUpdate;
  
  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          taskUpdate = listTasks[i]
          taskUpdate.descripcion = req.body.descripcion;
          res.status(200).json({
            taskUpdate
          })
      }
  }
  res.status(404).send(respuesta404);
});

/** DELETE */
/* 
   /api/tasks
   Actualiza una tarea.
   Atributos: title, description.
*/
app.delete('/api/tasks/:id', (req, res) => {
  console.log("DELETE")
  
  if(listTasks == undefined || listTasks.length < 1){
    res.status(404).send(respuesta404);
  }
  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          listTasks.splice(i,1);
          res.status(200).send({message: `Tarea ${req.params.id} borrada.`});
    }
  }
  res.status(404).send(respuesta404);
});



// Server Start
app.listen(port, () => {
 console.log(`El servidor está inicializado en http://localhost:${port}`);
})