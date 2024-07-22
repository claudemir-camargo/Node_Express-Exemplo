const express = require('express');

const app = express();

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

app.get("/produtos", (req, res) => {

	const produtos = [
		{
		  "id": 1,
		  "nome": "Camiseta",
		  "descricao": "Camiseta de algodão preta",
		  "preco": 29.99,
		  "estoque": 100
		},
		{
		  "id": 2,
		  "nome": "Celular",
		  "descricao": "Smartphone Android",
		  "preco": 799.90,
		  "estoque": 50
		},
		{
		  "id": 3,
		  "nome": "Livro",
		  "descricao": "Aventuras de Sherlock Holmes",
		  "preco": 15.50,
		  "estoque": 75
		}
	  ]

	res.send(JSON.stringify(produtos));
});

app.get("/clientes", (req, res) => {

	const dados = [{
		id:777,
		nome: "Fabiana Souza",
		endereco: "Rua sem nome",
		cpf: "555777888666"
	},
	{
		id:888,
		nome: "Jorge Aragao",
		endereco: "Rua dos trapalhoes",
		cpf: "55544477766"
	},
	{
		id:999,
		nome: "Claudemir Camargo",
		endereco: "7",
		cpf: "12345678910"
	}]
	
	res.send(dados);
});


