'use strict'

const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var listTasks=[];

var contador = 0;

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

  var respuesta404 = {
    error: true, 
    codigo: 404, 
    mensaje: 'Tarea no encontrada'
   };

  var taskParam;

  if(listTasks == undefined || listTasks.length < 1){
    res.status(204).send();
  }

  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          taskParam = listTasks[i];
          res.status(200).json({
            taskParam
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

  res.status(200).send({message: `La tarea se ha creado: ${task}`})
});

/** PUT */
/* 
   /api/tasks
   Actualiza una tarea.
   Atributos: title, description.
*/
app.put('/api/tasks/:id', (req, res) => {

  if(listTasks == undefined || listTasks.length < 1){
    res.status(204).send();
  }
  var taskUpdate;
  
  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          taskUpdate = listTasks[i]
          taskUpdate.descripcion = req.params.descripcion;
          res.status(200).json({
            taskUpdate
          })
      }
  }
  res.status(404).send(respuesta404);

  res.send(`[PUT] Tarea ${req.params.id} actualizada.`);
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
    res.status(204).send();
  }
  for(var i = 0; i < listTasks.length; i++) {
    if (listTasks[i].id== req.params.id) {
          listTasks.splice(i,1);
        break;
    }
  }

  res.status(200).send(`[DELETE] Tarea ${req.params.id} borrada.`);
});



// Server Start
app.listen(port, () => {
 console.log(`El servidor está inicializado en http://localhost:${port}`);
})