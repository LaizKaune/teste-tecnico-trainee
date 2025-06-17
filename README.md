# 🧪 Desafio Fullstack - Listagem de Pessoas

## 📋 Descrição
Crie uma aplicação fullstack composta por:

- Back-end (Node.js, framework livre)
- Front-end (Next.js)

Armazene os dados em memória (no estado), sem persistência em banco de dados.

## 🎯 Funcionalidades

### Back-end (API REST)
Implemente os seguintes endpoints:

#### GET /pessoas
Retorna a lista de pessoas.

#### POST /pessoas
Cadastra uma nova pessoa. Payload:

```json
{
  "nome": "João da Silva",
  "genero": "masculino",
  "dataNascimento": "2000-01-01"
}
```

#### DELETE /pessoas/:id
Remove uma pessoa pelo id.

#### (Opcional): Adicionar filtros via query string:
GET /pessoas?genero=masculino&faixaEtaria=adulto

Faixas etárias:
- **Criança**: até 12 anos
- **Adulto**: de 13 a 59 anos
- **Idoso**: 60 anos ou mais

### Front-end (Next.js)
- Página com formulário para cadastrar nova pessoa
- Página com lista de pessoas
- Permitir filtro por gênero e faixa etária
- Permitir exclusão de uma pessoa
- Dados obtidos diretamente da API local via fetch/axios

## ✅ Critérios de Avaliação
- Estrutura de código clara e organizada
- Uso adequado de componentes no Next.js
- API funcional e bem definida
- Implementação de filtros e exclusão
- Simplicidade e clareza (não precisa de design sofisticado)

## 🛠 Requisitos técnicos
- Node.js (pode usar Express, Fastify, ou outro framework)
- Next.js
- Armazenamento dos dados em memória (sem banco de dados)
- Integração entre front e back (axios/fetch)

## 🧪 Entrega
1. Faça fork deste repositório.
2. Implemente sua solução no seu fork.
3. Envie o link do repositório até 24/06/2025.
