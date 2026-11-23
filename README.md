# ConectaDoa

Sistema de gestao de doacoes para a ONG ConectaDoa.
Projeto Integrador Extensionista - ADS.

## Requisitos

- Git
- Vite+
- Node.js nao precisa ser instalado separadamente: o Vite+ gerencia o Node.js.

## Iniciar o projeto pela primeira vez

1. Instale o Git e o Vite+.

   ```powershell
   winget install --id Git.Git --exact
   irm https://vite.plus/ps1 | iex
   ```

   Feche e abra o terminal depois da instalacao.

2. Clone o repositorio e entre na pasta do projeto:

   ```bash
   git clone https://github.com/Rafaelbici74/Faculdade_Trabalho.git
   cd Faculdade_Trabalho/conectadoa
   ```

3. Instale as dependencias:

   ```bash
   vp install
   ```

4. Crie o arquivo de ambiente local:

   ```powershell
   Copy-Item .env.example .env
   ```

   O arquivo `.env` nao deve ser enviado ao GitHub.

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

## Verificacao rapida

- API direta:
  `http://localhost:3000/api/health`
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

## Publicar alteracoes no GitHub

```bash
git add .
git commit -m "Descricao da alteracao"
git push
```

Para parar a API ou o frontend, pressione `Ctrl+C` no terminal correspondente.

