const DataBase = require('./db')
const createProffy = require('./createProffy')


DataBase.then(async(db) => {
    // Inserir dados

    proffyValue = {
        name: "Ramon Alves",
        avatar: "https://avatars2.githubusercontent.com/u/62886626?s=460&u=8774590855d4450cadf3391b8573baf6ddfe4d79&v=4",
        whatsapp: "(83)981527792",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20"
            // proffy_id virá pelo banco de dados
    }

    classScheduleValue = [
        // class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, proffyValue, classValue, classScheduleValue)

    //Consultar os dados inseridos
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
        //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
        //console.log(selectClassesAndProffys)

    // o horario que a passoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
    // já o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to < "520"
    `)

    console.log(selectClassesSchedules)

})