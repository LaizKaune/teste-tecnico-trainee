const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let lista = [];
let proxId = 1;

// idade
function pegaIdade(nasc) {
  const hoje = new Date();
  const data = new Date(nasc);
  let idade = hoje.getFullYear() - data.getFullYear();
  const m = hoje.getMonth() - data.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < data.getDate())) {
    idade--;
  }
  return idade;
}

// classific. faixa etária
function faixa(nasc) {
  const idade = pegaIdade(nasc);
  if (idade <= 12) return 'crianca';
  if (idade >= 60) return 'idoso';
  return 'adulto';
}

// GET
app.get('/pessoas', (req, res) => {
  const { genero, faixaEtaria } = req.query;
  let resultado = lista;

  if (genero) {
    resultado = resultado.filter(p => p.genero === genero);
  }

  if (faixaEtaria) {
    resultado = resultado.filter(p => faixa(p.nasc) === faixaEtaria);
  }
  if (faixaEtaria) {
  resultado = resultado.filter(p => {
    const calculada = faixa(p.nasc);
    console.log(`${p.nome}: ${calculada}`);
    return calculada === faixaEtaria;
  });
}


  res.json(resultado);
});

// POST
app.post('/pessoas', (req, res) => {
  const { nome, genero, nasc } = req.body;
  const nova = { id: proxId++, nome, genero, nasc };
  lista.push(nova);
  res.status(201).json(nova);
});

// DELETE
app.delete('/pessoas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  lista = lista.filter(p => p.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});