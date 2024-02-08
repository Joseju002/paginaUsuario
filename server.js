const express = require("express");
const app = express();

const port = 3002;

const fs = require("fs");
app.use(express.static('dist'));

app.get("*", (req, res) => {
    var contenido = fs.readFileSync("./dist/index.html");
    res.setHeader("Content-Type", "text/html");
    res.send(contenido);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})