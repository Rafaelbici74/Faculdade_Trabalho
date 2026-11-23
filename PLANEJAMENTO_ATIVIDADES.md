# Planejamento - Projeto Integrador Extensionista II

Este projeto sera desenvolvido em duas etapas independentes de entrega, mas continuas no mesmo repositorio. A implementacao da Atividade 2 sera iniciada somente depois da conclusao e validacao da Atividade 1.

## Confirmacao das atividades

- **Atividade 1:** cria o esqueleto do projeto com Vite+, Express, proxy `/api`, pagina de health check, ambiente `.env`, README e publicacao no GitHub.
- **Atividade 2:** usa o mesmo projeto da Atividade 1 e acrescenta o banco de dados e o schema derivado do MER do projeto da ONG.
- Os materiais sobre Vite+, Git e API sao referencia da Atividade 1.
- Os materiais sobre banco, XAMPP e SQL sao referencia da Atividade 2.
- Os documentos de nivelamento e Documento de Visao servem como contexto do projeto anterior (PIE I), mas nao substituem o MER real da ONG.

## Documentacao relacionada

### Atividade 1

- `InfoAtividade/PIE2_Atividade1.pdf`
- `InfoAtividade/PIE2_Aula1_Material_de_Apoio.pdf`
- `InfoAtividade/Materiais de Nivelamento-20261123/PIE2-Aula-1-GIT-Vite-e-Esqueleto-da-Aplicacao.pdf`

### Atividade 2

- `InfoAtividade/PIE2_ADS_Atividade2.pdf`
- `InfoAtividade/Materiais-20261123/PIE2_Aula2_Material_de_Apoio.pdf`
- `InfoAtividade/Materiais-20261123/PIE2_Aula2_MaterialApoio_XAMPP_conectadoa.pdf`
- `InfoAtividade/Materiais-20261123/aula2-PIEII-ADS.pdf`
- `InfoAtividade/aula2-PIEII-ADS.pdf`

### Materiais gerais

- `InfoAtividade/Materiais de Nivelamento-20261123/PIE1-2-ADS_Guia_de_Nivelamento.pdf`
- `InfoAtividade/Materiais de Nivelamento-20261123/PIE1_DocumentoDeVisao.docx`
- `InfoAtividade/Materiais-20261123/PIE2_Aula_3_Frontend-com-Vite-Integrado-a-API.pdf`

## Etapa 1 - Implementar e entregar a Atividade 1

1. Confirmar ou criar o Git configurado com nome e e-mail.
2. Instalar Git, Vite+ e suas dependencias.
3. Criar a aplicacao Vanilla JavaScript com Vite+ na pasta `conectadoa`.
4. Configurar `.gitignore`, `.env` e `.env.example`.
5. Criar `server/index.js` com Express e `GET /api/health`.
6. Configurar o script `api` no `package.json`.
7. Configurar o proxy `/api` no `vite.config.ts`.
8. Fazer a pagina inicial mostrar `Status da API: ok` e data/hora.
9. Executar `vp check --fix`, `vp check` e `vp build`.
10. Rodar API e frontend em dois processos e validar `http://localhost:5173`.
11. Criar o README com requisitos e instrucoes de execucao.
12. Fazer pelo menos 3 commits separados ao longo das etapas.
13. Publicar no repositório informado pelo usuario e validar o acesso publico.
14. Registrar evidencias locais da entrega:
   - link publico do repositorio;
   - captura PNG/JPG de `http://localhost:5173` com barra de endereco e status da API.

### Criterios de conclusao da Etapa 1

- `.env` nao aparece no Git.
- `.env.example` aparece no Git.
- README aparece na pagina inicial do repositorio.
- A pagina mostra `Status da API: ok` com data e hora.
- A API responde em `http://localhost:3000/api/health`.
- O frontend responde em `http://localhost:5173`.
- Existe pelo menos um commit por etapa relevante.
- O repositorio remote esta configurado e atualizado.

## Etapa 2 - Implementar e entregar a Atividade 2

1. Obter ou confirmar o MER do projeto da ONG.
2. Identificar todas as entidades, atributos, cardinalidades e relacionamentos N:N.
3. Criar `database/schema.sql`.
4. Criar `database/seed.sql` somente se os dados de exemplo forem necessarios.
5. Garantir no SQL:
   - `SET NAMES utf8mb4`;
   - recreacao da base;
   - tabelas de todas as entidades;
   - tabelas associativas para relacionamentos N:N;
   - PK, FK, `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT` e `ON DELETE` quando aplicavel;
   - tipos adequados para textos, datas, inteiros e valores monetarios.
6. Instalar ou usar um servidor MySQL/MariaDB local.
7. Executar `schema.sql` duas vezes seguidas sem erro.
8. Executar `seed.sql`, quando existir.
9. Confirmar as consultas e a integridade dos dados.
10. Atualizar variaveis de ambiente e conexao da API.
11. Fazer commit da entrega da Atividade 2.

### Criterios de conclusao da Etapa 2

- Existe uma tabela para cada entidade do MER.
- Existe uma tabela associativa para cada relacionamento N:N.
- Todas as FKs apontam para tabelas e PKs existentes.
- Regras obrigatorias estao garantidas pelo banco.
- `schema.sql` pode recriar o banco repetidamente.
- Dados pessoais desnecessarios foram excluidos por consideracoes de LGPD.
- O arquivo `schema.sql` esta pronto para envio na plataforma.

## Tecnologias exigidas pelas atividades

- Git e GitHub.
- Vite+ com modelo Vanilla e JavaScript.
- Node.js gerenciado pelo Vite+.
- Express e dotenv.
- MySQL ou MariaDB para a Atividade 2.
- VS Code.

## Configuracao conhecida

- Projeto base: `conectadoa`.
- ONG inicial: ConectaDoa, ate que seja fornecido o MER proprio.
- Repositorio informado: `https://github.com/Rafaelbici74/Faculdade_Trabalho.git`.
- Usuario Git: `TrabalhoFaculdade`.
- E-mail Git: `rafaeltp74.ladeira@gmail.com`.

## Duvias pendentes

1. SQLite nao atende ao formato solicitado pela Atividade 2: a documentacao exige MySQL/MariaDB, usa `SET NAMES`, bancos, `AUTO_INCREMENT`, SQL de `schema.sql` e instrucoes para XAMPP/MySQL. SQLite seria uma substituicao tecnica diferente e exigiria adaptar todos os exemplos.
2. A pasta `InfoAtividade` nao contem o MER proprio preenchido nem um Documento de Visao personalizado. Portanto, a Etapa 2 precisa usar o modelo ConectaDoa ou receber o MER/entidades da ONG escolhida antes de criar o schema.

## Estado atual

- Os documentos foram analisados.
- Nao houve alteracao de codigo da aplicacao.
- Este arquivo registra o planejamento aprovado para iniciar as etapas separadamente.
