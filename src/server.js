const nunjucks = require('nunjucks')
const express = require('express')
const app = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Config nunjucks
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

// .use => Configs do Server
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// .get && .post => Rotas
app.get("/", pageLanding)

app.get("/study", pageStudy)

app.get("/give-classes", pageGiveClasses)
app.post("/save-classes", saveClasses)

/* const PORT = 5500;
app.listen(process.env.PORT || PORT, () => { // Porta
    console.log('Servidor iniciado com sucesso! http://localhost:' + PORT);
}); */

app.listen(5500, () => {
    console.log("Server iniciado! ")
})