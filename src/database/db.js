const Database = require('sqlite-async')

function execute(db) {

    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );
        
        CREATE TABLE IF EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)

/**
 * Lembrar de :
 * Instalar a lib => sqlite-async (npm i sqlite-async)
 * Instalar a extensão para o vscode => SQLite (alexcvzz)
 */