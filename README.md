# task-manager
Administrador de tareas personales

Endpoint
http://www.task-manager.com/api/

Tasks

GET   /tasks/{task_id}   -- Devuelve una tarea con ese {id}

GET   /tasks/list_all    -- Devuelve todas las tareas

GET   /tasks/search?user={user_id}    -- Devuelve todas las tareas de un usuario

Users

GET  /users/{user_id}

GET  /users/{user_id}/listing_tasks -- Devuelve las tareas asignadas al id de usuario {user_id}

