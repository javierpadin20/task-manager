# task-manager
Administrador de tareas personales. La aplicación posee un CRUD de tareas. 

Endpoint
http://www.task-manager.com/api/

Tasks

GET  /tasks/{task_id}         -- Devuelve una tarea que coincida con el id {task_id}

GET  /tasks/                  -- Devuelve todas las tareas

POST /tasks/                  -- Crea una tarea
                              -- Parametros
                                      -- descripcion

PUT  /tasks/{task_id}         -- Actualiza una tarea con id {task_id}
                              -- Parametros
                                      -- descripcion

DELETE  /tasks/{task_id}       -- Borra una tara con id {task_id}



