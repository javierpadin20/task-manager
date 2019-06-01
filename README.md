# task-manager
Administrador de tareas personales. La aplicación posee un CRUD de usuarios y un CRUD de tareas. Las tareas se pueden asignar a un usuario, se puede cambiar de estado y listar tares por usuario, estado o listarlas todas.


Endpoint
http://www.task-manager.com/api/

Tasks

GET  /tasks/{task_id}         -- Devuelve una tarea que coincida con el id {task_id}

GET  /tasks/                  -- Devuelve todas las tareas

GET  /tasks?state={state_id}  -- Devuelve todas las tareas que se encuentren en un estado con id {state_id}

POST /tasks/                  -- Crea una tarea

PUT  /tasks/{task_id}         -- Actualiza una tarea con id {task_id}

DELETE  /tasks/{task_id}       -- Borra una tara con id {task_id}



