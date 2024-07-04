const express = require('express') // importa el modulo express
const app = express()
const port = 3000 //puerto del servidor web (ej: localhost:3000)

//ruta (el / significa la ruta raiz del sitio)
app.get('/', (req, res) => {
  res.send('Hello World!') //la respuesta del servidor sera un string
})

//inicializamos el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})