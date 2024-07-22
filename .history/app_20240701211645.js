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

app.get("/clientes", (req, res) => {

	const dados = [{
		id:889,
		nome: "Fabiana Souza",
		endereco: "Rua sem nome",
		cpf: "555777888666"
	},
	{
		id:889,
		nome: "Jorge Aragao",
		endereco: "Rua dos trapalhoes",
		cpf: "55544477766"
	}]
	 
	//const yyyyyyy = JSON.stringify(xxxxxxx); //desnecessário devido à express.json() acima.
	
	res.send(dados);
});

