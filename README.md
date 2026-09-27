💰 Controle Financeiro

Aplicação web desenvolvida em React para gerenciamento simples de receitas e despesas. O projeto permite cadastrar entradas e saídas, visualizar um resumo financeiro e excluir transações. Os dados são armazenados no localStorage do navegador, permanecendo disponíveis mesmo após recarregar a página.

📸 Funcionalidades

➕ Cadastro de entradas

➖ Cadastro de saídas

💰 Cálculo automático de:

Total de entradas

Total de saídas

Saldo total

🗑️ Exclusão de transações

💾 Persistência dos dados utilizando localStorage

📋 Listagem das transações cadastradas

📱 Layout responsivo

🎨 Interface estilizada com styled-components

🔼🔽 Identificação visual de entradas e saídas com ícones

🛠️ Tecnologias utilizadas

React 19

JavaScript

Styled Components

React Icons

HTML5

CSS3

LocalStorage

Create React App

📂 Estrutura do projeto

src/
├── components/
│   ├── Form/
│   │   ├── index.js
│   │   └── styles.js
│   │
│   ├── Grid/
│   │   ├── index.js
│   │   └── styles.js
│   │
│   ├── GridItem/
│   │   ├── index.js
│   │   └── styles.js
│   │
│   ├── Header/
│   │   ├── index.js
│   │   └── styles.js
│   │
│   ├── Resume/
│   │   ├── index.js
│   │   └── styles.js
│   │
│   └── ResumeItem/
│       ├── index.js
│       └── styles.js
│
├── styles/
│   └── global.js
│
├── App.js
└── index.js

⚙️ Como executar o projeto

1. Clone o repositório

git clone <URL_DO_SEU_REPOSITORIO>

2. Entre na pasta do projeto

cd Controle-Financeiro

3. Instale as dependências

npm install

4. Inicie a aplicação

npm start

A aplicação será aberta no navegador, normalmente em:

http://localhost:3000

🧾 Como utilizar

Adicionar uma entrada

Digite uma descrição.

Informe o valor.

Selecione Entrada.

Clique em ADICIONAR.

Exemplo:

Descrição: Salário
Valor: 1500
Tipo: Entrada

Adicionar uma saída

Digite uma descrição.

Informe o valor.

Selecione Saída.

Clique em ADICIONAR.

Exemplo:

Descrição: Aluguel
Valor: 800
Tipo: Saída

O sistema identifica uma saída através da propriedade:

expense: true

Enquanto uma entrada utiliza:

expense: false

📊 Resumo financeiro

O componente Resume apresenta três informações principais:

Entradas: soma de todas as transações classificadas como entrada.

Saídas: soma de todas as transações classificadas como saída.

Total: diferença entre entradas e saídas.

A lógica principal está no App.js, utilizando filter, map e reduce para calcular os valores.

💾 Armazenamento

As transações são armazenadas no localStorage com a chave:

transactions

Exemplo de estrutura armazenada:

[
  {
    id: 123,
    desc: "Salário",
    amount: "1500",
    expense: false
  },
  {
    id: 456,
    desc: "Aluguel",
    amount: "800",
    expense: true
  }
]

Isso permite que os dados continuem disponíveis quando a página for recarregada.

🗑️ Exclusão de transações

Cada transação possui um ícone de lixeira. Ao clicar nele, a transação é removida da lista e o localStorage é atualizado.

🎨 Estilização

A aplicação utiliza Styled Components, mantendo os estilos organizados junto aos componentes.

Exemplo:

import { styled } from "styled-components";

export const Container = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

📦 Dependências principais

{
  "react": "^19.3.0",
  "react-dom": "^19.3.0",
  "react-icons": "^5.7.0",
  "styled-components": "^6.5.3",
  "react-scripts": "5.0.1"
}

🧠 Conceitos praticados

Este projeto foi desenvolvido para praticar conceitos importantes do React, como:

Componentização

Props

useState

useEffect

Eventos e formulários

Renderização de listas com map

Condicionais no JSX

Comunicação entre componentes

Manipulação de arrays

Persistência com localStorage

Styled Components

Organização de projetos React

🚀 Possíveis melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

Edição de transações

Filtro por entrada e saída

Busca por descrição

Categorias de gastos

Formatação de valores como moeda brasileira

Gráficos financeiros

Filtro por período

Confirmação antes de excluir uma transação

Geração de relatórios

Tema claro/escuro

👨‍💻 Autor

Lauro Viana

Projeto desenvolvido como prática de desenvolvimento web com React.
