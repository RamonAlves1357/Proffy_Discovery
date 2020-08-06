const proffys = [
    {
        name: "Ramon Alves",
        avatar: "https://avatars2.githubusercontent.com/u/62886626?s=460&u=8774590855d4450cadf3391b8573baf6ddfe4d79&v=4", 
        whatsapp: "(83)981527792", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Ciro Gomes",
        avatar: "https://avatars0.githubusercontent.com/u/43193194?s=460&u=7518312f958fd0f7fa7b3b9e34ad54755fc30b0d&v=4", 
        whatsapp: "(83)981527792", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [820], 
        time_to: [1120]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


// Funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

const nunjucks = require('nunjucks')
const express = require('express')
const app = express()

// Config nunjucks
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

// .use => Configs do Server
app.use(express.static("public"))

// .get && .post => Rotas
app.get("/", (req, res) => {
    return res.render(__dirname + "/views/index.html")
})

app.get("/study", (req, res) => {
    const filter = req.query
    return res.render(__dirname + "/views/study.html", { proffys, subjects, weekdays, filter })
})

app.get("/give-classes", (req, res) => {
    const dados = req.query

    const isNotEmpty = Object.keys(dados).length > 0
    
    // Se tiver dados
    if (isNotEmpty) {

        dados.subject = getSubject(dados.subject)

        // Add dados a lista de proffys
        proffys.push(dados)

        // Redirecionadno para /study
        res.redirect("/study")

    }

    // Se nao, mostrar a pagina
    return res.render(__dirname + "/views/give-classes.html", { subjects, weekdays })
})

/* const PORT = 5500;
app.listen(process.env.PORT || PORT, () => { // Porta
    console.log('Servidor iniciado com sucesso! http://localhost:' + PORT);
}); */

app.listen(5500, () => {
    console.log("Server iniciado! ")
})