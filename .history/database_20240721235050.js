const mysql = require('mysql2');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',               // Usuário padrão do MySQL no XAMPP
    password: '',               // Senha padrão do MySQL no XAMPP (vazia por padrão)
    database: 'meu_banco'       // Nome do banco de dados que você criou
});

// Conecte-se ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;