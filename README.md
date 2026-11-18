# 🦷 Clínica Odontológica — Sistema de Agendamentos

Projeto desenvolvido como forma de praticar e aprofundar meus conhecimentos em React.js, explorando a criação de interfaces componentizadas, gerenciamento de estados e integração com APIs.

A aplicação consiste em um sistema de agendamento para uma clínica odontológica, permitindo cadastrar pacientes, selecionar procedimentos, profissionais, datas e horários, além de visualizar e cancelar agendamentos.

Durante o desenvolvimento, também trabalhei com a criação de uma API utilizando Node.js e Express, integração com banco de dados TiDB (compatível com MySQL) e publicação da aplicação na nuvem.

## Tecnologias utilizadas

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- MySQL2

### Banco de dados

- TiDB Cloud (compatível com MySQL)

### Hospedagem

- Vercel — Frontend
- Render — Backend

## Funcionalidades

- Cadastro de agendamentos.
- Preenchimento de dados do paciente.
- Seleção de procedimento odontológico.
- Seleção de profissional.
- Escolha de data e horário.
- Visualização dos agendamentos cadastrados.
- Cancelamento de agendamentos.
- Integração entre frontend, backend e banco de dados.

## Estrutura do projeto

```text
PROJETO-REACT/
│
├── src/
│   ├── components/
│   │   ├── Agendamentos.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Infos.jsx
│   │   └── Servicos.jsx
│   │
│   ├── pages/
│   │   └── App.jsx
│   │
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── server.js
├── package.json
└── .env
```

## Como executar o projeto localmente

**1. Clone o repositório**

```bash
git clone https://github.com/dimitrirosso/Clinica-agenamento.git
```

**2. Acesse a pasta do projeto**

```bash
cd projeto-react
```

**3. Instale as dependências**

```bash
npm install
```

**4. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as credenciais do banco de dados:

```env
DB_HOST=seu_host
DB_PORT=sua_porta
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco

```

**5. Inicie o backend**

```bash
node src/server.js
```

**6. Inicie o frontend**

Em outro terminal:

```bash
npm run dev
```

Acesse o endereço local fornecido pelo Vite no terminal.

## Comunicação entre frontend e backend

A aplicação utiliza requisições HTTP para realizar a comunicação entre o React e o servidor Express.

| Método | Rota                   | Descrição                                |
| ------ | ---------------------- | ---------------------------------------- |
| POST   | `/add`                 | Cadastra um agendamento                  |
| GET    | `/agendamentos`        | Lista os agendamentos                    |
| DELETE | `/agendamentos/:index` | Remove um agendamento pelo identificador |

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar e aprofundar conhecimentos em desenvolvimento web, componentização com React, criação de APIs REST, operações CRUD, integração com banco de dados relacional e publicação de aplicações na nuvem.

---

**Desenvolvido por Dimitri Rosso**
