// Importar los modulos necesarios
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear una instancia de la aplicacion Express
const app = express();
const port = 3002;

// Configuracion de la conexion a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pruebatecnica_crud'
});

// conectar a la base de datos
db.connect((err) => {
  if (err) throw err;
  console.log('Conexión a MySQL establecida');
});

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS desde el origen especifico
app.use(cors({
    origin: 'http://localhost:3000', // Reemplaza esto con el dominio de tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Agrega PUT y otros métodos que necesites permitir
  }));

// Rutas CRUD para las tareas
// Obtener todas las tareas
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Agregar una nueva tarea
app.post('/tasks/add', (req, res) => {
  const { task } = req.body;
  db.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, result) => {
    if (err) throw err;
    res.send('Tarea añadida');
  });
});

// Actualizar una tarea especifica
app.put('/tasks/update/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  db.query('UPDATE tasks SET task = ? WHERE id = ?', [task, id], (err, result) => {
    if (err) throw err;
    res.send('Tarea actualizada');
  });
});

// eliminar una tarea especifica
app.delete('/tasks/delete/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send('Tarea eliminada');
  });
});

// iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${port}`);
});