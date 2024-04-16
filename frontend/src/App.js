import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Grid, Paper, Typography, Box } from '@material-ui/core';

function App() {
  // para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  // para almacenar la nueva tarea
  const [newTask, setNewTask] = useState('');
  // para almacenar la tarea que se esta editando
  const [editingTask, setEditingTask] = useState(null);
  // para almacenar el texto editado de la tarea
  const [editedTaskText, setEditedTaskText] = useState('');
  // para almacenar errores
  const [error, setError] = useState(null);

  // efecto para cargar las tareas al cargar la pagina
  useEffect(() => {
    fetchTasks();
  }, []);

  //obtener las tareas desde el servidor
  const fetchTasks = () => {
    axios.get('http://localhost:3002/tasks')
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  // agregar una nueva tarea
  const handleAddTask = () => {
    axios.post('http://localhost:3002/tasks/add', { task: newTask })
      .then(() => {
        setNewTask('');
        fetchTasks(); // Actualiza la lista
      })
      .catch(err => {
        setError(err.message);
      });
  };

  // editar una tarea
  const handleEditTask = (taskId) => {
    setEditingTask(taskId);
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditedTaskText(taskToEdit.task);
  };

  // guardar la tarea editada
  const handleSaveEditedTask = () => {
    if (!editedTaskText.trim()) {
      setError('El texto de la tarea editada no puede estar vacío');
      return;
    }
    axios.put(`http://localhost:3002/tasks/update/${editingTask}`, { task: editedTaskText })
      .then(() => {
        setEditingTask(null);
        setEditedTaskText(''); // Restablece el texto editado
        fetchTasks(); // actualiza la lista de tareas despues de guardar la edicin
      })
      .catch(err => {
        setError(err.message);
      });
  };

  // cancelar la edición de una tarea
  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditedTaskText(''); // aplicartexto editado
  };

  // eliminar una tarea
  const handleDeleteTask = (taskId) => {
    axios.delete(`http://localhost:3002/tasks/delete/${taskId}`)
      .then(() => {
        fetchTasks(); // ver lista de tareas despues de eliminar una tarea
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <Container>
      {/* CONTENEDOR PARA AGREGAR LA LISTA DE TAREAS NUEVAS */}
      <Box display="flex" justifyContent="center" mb={2} mt={2} p={2} border={1} borderColor="primary.main">
        <Box mr={2}>
          <Typography variant="h5">Nueva Tarea</Typography>
        </Box>
        <TextField
          label="Nueva Tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>Agregar Tarea</Button>
      </Box>

      {/* CONTENEDOR PARA LA LISTA DE TAREAS */}
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>Lista de tareas</Typography>
      <Grid container spacing={2}>
        {tasks.map(task => (
          <Grid item xs={12} key={task.id}>
            <Paper elevation={3} style={{ padding: '10px' }}>
              {editingTask === task.id ? (
                <>
                  <TextField
                    value={editedTaskText}
                    onChange={(e) => setEditedTaskText(e.target.value)}
                  />
                  <Button variant="contained" color="primary" onClick={handleSaveEditedTask}>Guardar</Button>
                  <Button variant="contained" onClick={handleCancelEdit}>Cancelar</Button>
                </>
              ) : (
                <>
                  <p>{task.task}</p>
                  <Button variant="contained" onClick={() => handleEditTask(task.id)}>Editar</Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteTask(task.id)}>Eliminar</Button>
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
      {error && <p>Error: {error}</p>}
    </Container>
  );
}

export default App;