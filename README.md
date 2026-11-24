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

## Uso de agente de IA

A arquitetura inicial do projeto e a criação dos commits foram automatizadas com auxílio de um agente personalizado do GitHub Copilot no VS Code. O código e as instruções foram verificados durante o desenvolvimento.

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

O projeto utiliza MySQL na porta `3306`. Siga os passos abaixo no Windows.

### 1. Inicie o servidor MySQL

Abra um terminal PowerShell separado e mantenha-o aberto enquanto usa o banco:

```powershell
& "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysqld.exe" --console --basedir="C:\Program Files\MySQL\MySQL Server 8.4" --datadir="C:\ProgramData\MySQL\MySQL Server 8.4\Data" --port=3306
```

Espere aparecer `ready for connections`. Se o MySQL já estiver rodando como serviço, não inicie uma segunda instância.

### 2. Configure a conexão local

Na pasta `conectadoa`, crie `.env` a partir de `.env.example` se ainda não existir. As configurações locais usadas neste projeto são:

```text
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=conectadoa
```

O usuário local `root` foi configurado sem senha neste ambiente. Nunca envie `.env` ao GitHub; use `.env.example` como referência.

### 3. Execute e valide o schema

Abra outro PowerShell na pasta `conectadoa`. Defina o caminho do cliente MySQL e do schema:

```powershell
$mysql = "C:\Program Files\MySQL\MySQL Server 8.4\bin\mysql.exe"
$schema = (Resolve-Path .\database\schema.sql).Path.Replace('\', '/')
```

Execute o schema **duas vezes seguidas**, como pede a atividade:

```powershell
& $mysql -u root -h 127.0.0.1 --execute "SOURCE $schema"
& $mysql -u root -h 127.0.0.1 --execute "SOURCE $schema"
```

As duas execuções devem voltar ao prompt sem mostrar `ERROR`. Para confirmar que as cinco tabelas foram criadas:

```powershell
& $mysql -u root -h 127.0.0.1 -e "USE conectadoa; SHOW TABLES;"
```

**Atenção:** `schema.sql` apaga e recria o banco. Se executar novamente depois de carregar dados ou cadastrar informações, esses dados serão apagados.

### 4. (Opcional) Carregue dados de exemplo

O `seed.sql` é auxiliar para testar a API; não é pedido como arquivo de entrega da Atividade 2. Execute-o depois de validar o schema:

```powershell
$seed = (Resolve-Path .\database\seed.sql).Path.Replace('\', '/')
& $mysql -u root -h 127.0.0.1 --execute "SOURCE $seed"
```

Para conferir os dados de exemplo:

```powershell
& $mysql -u root -h 127.0.0.1 -e "SELECT COUNT(*) AS doadores FROM conectadoa.doador; SELECT COUNT(*) AS itens FROM conectadoa.item; SELECT COUNT(*) AS doacoes FROM conectadoa.doacao; SELECT COUNT(*) AS doacao_item FROM conectadoa.doacao_item;"
```

O resultado esperado é 4 doadores, 9 itens, 3 doações e 7 associações.

### Arquivo a enviar na Atividade 2

O PDF oficial da atividade solicita que você envie **somente o arquivo `schema.sql`** no campo da Atividade 2 na plataforma:

```text
conectadoa/database/schema.sql
```

Não é pedido enviar o `seed.sql`, captura de tela ou o repositório para esta atividade. O `seed.sql`, a API e as telas são materiais de apoio/continuação do projeto.

## Publicar alteracoes no GitHub

```bash
git add .
git commit -m "Descricao da alteracao"
git push
```

Para parar a API ou o frontend, pressione `Ctrl+C` no terminal correspondente.

