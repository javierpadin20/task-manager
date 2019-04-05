# task-manager
Administrador de tareas personales. La aplicación posee un CRUD de usuarios y un CRUD de tareas. Las tareas se pueden asignar a un usuario, se puede cambiar de estado y listar tares por usuario, estado o listarlas todas.
Los estados no se modifican ni se crean.

Endpoint
http://www.task-manager.com/api/

Tasks

GET   /tasks/{task_id}         -- Devuelve una tarea que coincida con el id {task_id}

GET   /tasks/                  -- Devuelve todas las tareas

--- REVISAR ---- GET  /tasks/state/{state_id}  -- Devuelve todas las tareas que se encuentren en un estado con id {state_id}

POST /tasks/                  -- Crea una tarea

PUT  /tasks/{task_id}         -- Actualiza una tarea con id {task_id}

DELETE  /tasks/{task_id}       -- Borra una tara con id {task_id}


Users

GET  /users/            -- Devuelve todos los usuarios

GET  /users/{user_id}   -- Devuelve un usuario que coincida con el id {user_id}

GET  /users/{user_id}/tasks    -- Devuelve todas las tareas asignadas a un usuario con el id {user_id}

POST /users/            -- Crea un usuario

PUT /users/{user_id}    -- Actualiza un usuario con id {user_id}

DELETE /users/{user_id} -- Borra un usuario con id {user_id}

States

GET  /states/            -- Devuelve todos los estados

GET  /states/{state_id}   -- Devuelve un estado que coincida con el id {state_id}

POST /states/            -- Crea un estado

PUT /states/{state_id}    -- Actualiza un esatdo con id {state_id}

DELETE /states/{state_id} -- Borra un estado con id {state_id}

