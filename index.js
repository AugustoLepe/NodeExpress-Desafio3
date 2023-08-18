const { getPosts, agregarPost } = require('./consultas');
const express = require('express');
const app = express();
const cors = require('cors')

app.listen(3001, console.log("SERVIDOR ENCENDIDO"))

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "../likeme_front/public/index.html")
})

app.get("/posts", async (req, res) => {
    const posts = await getPosts()
    res.json(posts)
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito!")
})