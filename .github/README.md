# Workflows do Lendas de Arcadia

Este diretório contém os workflows do GitHub Actions configurados para automatizar o desenvolvimento, testes e deploy do projeto Lendas de Arcadia.

## Workflows Disponíveis

### 1. Build and Deploy
**Arquivo:** `.github/workflows/build-and-deploy.yml`

Este workflow é responsável por construir e implantar o site no GitHub Pages. Ele é executado automaticamente quando há um push para a branch `main` ou manualmente através da aba Actions no GitHub.

**Etapas:**
- Checkout do código
- Configuração do Node.js
- Instalação das dependências
- Build do projeto
- Deploy para GitHub Pages (branch `gh-pages`)

### 2. Code Quality
**Arquivo:** `.github/workflows/code-quality.yml`

Este workflow verifica a qualidade do código através de linting. Ele é executado em pushes para as branches `main` e `develop` e em pull requests para essas branches.

**Etapas:**
- Checkout do código
- Configuração do Node.js
- Instalação das dependências
- Execução do linting (se configurado)

### 3. Pull Request Test
**Arquivo:** `.github/workflows/pr-test.yml`

Este workflow testa a aplicação em pull requests para garantir que o código novo não quebra nada.

**Etapas:**
- Checkout do código
- Configuração do Node.js
- Instalação das dependências
- Build do projeto
- Execução dos testes (se configurados)

### 4. Dependabot
**Arquivo:** `.github/dependabot.yml`

Esta configuração mantém as dependências do projeto atualizadas automaticamente.

- Verifica atualizações de pacotes npm semanalmente
- Verifica atualizações de ações do GitHub mensalmente
- Cria pull requests automáticos para as atualizações

## Como usar

Os workflows são executados automaticamente conforme os eventos configurados. Você também pode executar o workflow de build e deploy manualmente através da aba Actions no GitHub.

Para testar localmente antes de fazer o commit, você pode usar o comando:

```bash
cd lendas-of-arcadia
npm run build
```

## Personalização

Você pode personalizar os workflows editando os arquivos YAML correspondentes. Consulte a [documentação do GitHub Actions](https://docs.github.com/pt/actions) para mais informações. 