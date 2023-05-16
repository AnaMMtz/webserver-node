const express = require('express')
const app = express()
const port = 8080;

//Middleware contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola en su ruta')
})

// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Running in http://localhost:${port}`);
})