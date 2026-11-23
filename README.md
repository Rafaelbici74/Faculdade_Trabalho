# ConectaDoa

Sistema de gestão de doações para a ONG ConectaDoa.
Projeto Integrador Extensionista - ADS.

## Estrutura do projeto

```text
conectadoa/
├── database/
│   ├── schema.sql
│   └── seed.sql
├── server/
│   ├── routes/
│   ├── db.js
│   ├── index.js
│   └── validacao.js
├── src/
├── api.http
├── .env.example
└── vite.config.ts
```

## Requisitos

- Git
- Vite+
- MySQL 8.4 ou versão compatível
- Node.js não precisa ser instalado separadamente: o Vite+ gerencia o Node.js.

## Iniciar o projeto pela primeira vez

1. Instale o Git e o Vite+.

   ```powershell
   winget install --id Git.Git --exact
   irm https://vite.plus/ps1 | iex
   ```

   Feche e abra o terminal depois da instalação.

2. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/Rafaelbici74/Faculdade_Trabalho.git
   cd Faculdade_Trabalho/conectadoa
   ```

3. Instale as dependências:

   ```bash
   vp install
   ```

4. Crie o arquivo de ambiente local:

   ```powershell
   Copy-Item .env.example .env
   ```

   O arquivo `.env` não deve ser enviado ao GitHub.

## Executar a API e o frontend

Abra dois terminais na pasta `conectadoa`.

**Terminal 1 - API Express:**

   ```bash
   vp run api
   ```

   Resultado esperado:

   ```text
   API rodando em http://localhost:3000
   ```

**Terminal 2 - frontend Vite+:**

   ```bash
   vp dev
   ```

   Resultado esperado:

   ```text
   Local: http://localhost:5173/
   ```

Abra `http://localhost:5173` no navegador. A pagina deve mostrar:

```text
Status da API: ok
```

Junto da data e hora da resposta da API.

## Rotas da API

| Método | Rota | Finalidade |
|---|---|---|
| GET | `/api/health` | Verifica a API e a conexão com o banco |
| GET | `/api/doadores` | Lista os doadores |
| GET | `/api/doadores/:id` | Busca um doador |
| POST | `/api/doadores` | Cadastra um doador |
| PUT | `/api/doadores/:id` | Atualiza um doador |
| DELETE | `/api/doadores/:id` | Exclui um doador sem doações |
| GET | `/api/itens` | Lista categorias e itens |
| GET | `/api/doacoes` | Lista doações agrupadas |
| POST | `/api/doacoes` | Cadastra uma doação em transação |

O arquivo `api.http` contém testes manuais das rotas. No VS Code, use a extensão REST Client e clique em **Send Request**.

## Verificacao rapida

- API direta:
  `http://localhost:3000/api/health`
- Doadores:
  `http://localhost:3000/api/doadores`
- Itens:
  `http://localhost:3000/api/itens`
- Doações:
  `http://localhost:3000/api/doacoes`
- Frontend:
  `http://localhost:5173`
- Verificacao de codigo:

  ```bash
  vp check
  ```

- Geracao da versao de producao:

  ```bash
  vp build
  ```

## Banco de dados - Atividade 2

O projeto utiliza MySQL na porta `3306`.

Crie ou recrie o banco e os dados iniciais na pasta do projeto:

```powershell
& "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe" -u root -h 127.0.0.1 --execute "SOURCE C:/Users/rafae/OneDrive/Desktop/facul/Faculdade_Trabalho/conectadoa/database/schema.sql"
& "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe" -u root -h 127.0.0.1 --execute "SOURCE C:/Users/rafae/OneDrive/Desktop/facul/Faculdade_Trabalho/conectadoa/database/seed.sql"
```

Repita o primeiro comando duas vezes seguidas para conferir que o `schema.sql` recria o banco sem erros.

Para restaurar os dados iniciais após testes de cadastro ou exclusão:

```powershell
& "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe" -u root -h 127.0.0.1 --execute "SOURCE C:/Users/rafae/OneDrive/Desktop/facul/Faculdade_Trabalho/conectadoa/database/schema.sql"
& "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe" -u root -h 127.0.0.1 --execute "SOURCE C:/Users/rafae/OneDrive/Desktop/facul/Faculdade_Trabalho/conectadoa/database/seed.sql"
```

Os dados iniciais esperados são:

- 4 doadores
- 9 itens
- 3 doações
- 7 vínculos entre doações e itens

As configurações locais ficam em `.env`:

```text
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=conectadoa
```

Nunca envie `.env` ao GitHub. Use `.env.example` como referência.

## Publicar alteracoes no GitHub

```bash
git add .
git commit -m "Descricao da alteracao"
git push
```

Para parar a API ou o frontend, pressione `Ctrl+C` no terminal correspondente.

