const express = require('express');
const app = express();
const pool = require('./db'); // importando a conexão com o banco de dados

app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
    console.log("Servidor escutando na porta: ", PORT);
});

app.get("/", (req, res) => {
    const status = {
        "Status": "Rodando - IFSP"
    };
    res.send(status);
});

app.get("/produtos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM produtos");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Erro ao buscar produtos");
    }
});

app.get("/clientes", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM clientes");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Erro ao buscar clientes");
    }
});

app.get("/funcionarios", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM funcionarios");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Erro ao buscar funcionarios");
    }
});

app.get("/departamentos", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM departamentos");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Erro ao buscar departamentos");
    }
});

app.get("/vendas", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM vendas");
        res.json(rows);
    } catch (err) {
        res.status(500).send("Erro ao buscar vendas");
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (login(username, password)) {
        res.status(200).json({ message: "Login bem-sucedido" });
    } else {
        res.status(401).json({ message: "Credenciais inválidas" });
    }
});

function login(user, pwd) {
    const users = [
        { username: "usuario", password: "password" }
    ];
    const foundUser = users.find(u => u.username === user && u.password === pwd);
    return !!foundUser;
}