
# Gestor de Tareas (To-Do)_PruebaTecnica


**Paso 1: Clonar el repositorio desde GitHub**

>1. Ve al repositorio de GitHub donde está almacenado el código de tu proyecto.
>2. Haz clic en el botón "Code" y copia la URL del repositorio.
>3. Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio

```bash
$ Git Clone https://github.com/theber1204/Gestor-de-Tareas-To-Do
```


**Paso 2: Instalar las dependencias**

>1. Asegúrate de tener Node.js y npm instalados en tu sistema.
>2. Navega hasta el directorio del proyecto clonado.
>3. Ejecuta el siguiente comando para instalar las dependencias:


```bash
$ npm install
```


**Paso 3: Configurar la base de datos**

>1. Asegúrate de tener MySQL instalado en tu sistema y ejecutándose.
>2. Crea una base de datos llamada `pruebatecnica_crud` utilizando los comandos SQL proporcionados en el archivo de tu backend.
>3. Verifica que tu servidor de base de datos esté configurado para aceptar conexiones desde localhost en el puerto predeterminado.


**Paso 4: Ejecutar el servidor backend**

>1. Navega hasta el directorio del backend.
>2. Ejecuta el siguiente comando para iniciar el servidor:
```bash
$ node app.js
```

**Paso 5: Ejecutar la aplicación frontend**

>1. Navega hasta el directorio del frontend.
>2. Ejecuta el siguiente comando para iniciar la aplicación:
```bash
$ npm start
```

**Paso 6: Acceder a la aplicación en el navegador**
>1. Una vez que hayas seguido los pasos anteriores, podrás acceder a tu aplicación en un navegador web visitando la dirección http://localhost:3000 (o el puerto en el que se inicie tu aplicación de frontend).

.
## Solucion de Problemas

#### Problema de CORS

>Ajusta la configuración CORS: Si experimentas problemas con CORS, verifica que la configuración CORS en tu backend permita solicitudes PUT desde el origen del frontend (http://localhost:3000 en este caso). Asegúrate de que los métodos PUT y DELETE estén permitidos en la configuración CORS del servidor.

#### Errores de dependencias 

>Actualiza las dependencias: Verifica que las versiones de las dependencias en tu archivo package.json sean compatibles entre sí. Si encuentras errores relacionados con versiones incompatibles, intenta actualizar las dependencias a versiones que sean compatibles.

>Reinstala las dependencias: A veces, los errores pueden ocurrir debido a dependencias corruptas o mal instaladas. Intenta eliminar la carpeta |node_modules| y el archivo |package-lock.json| y luego ejecuta `npm install` nuevamente para reinstalar todas las dependencias.

**-material-ui/core**
```bash
$ npm install @material-ui/core
```
**-body-parser**
```bash
$ npm install body-parser
```
**-cors**
```bash
$ npm install cors
```
**-express**
```bash
$ npm install express
```
**-mysql**
```bash
$ npm install mysql
```
