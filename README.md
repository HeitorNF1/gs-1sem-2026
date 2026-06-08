# 🛰️ SkyGuard

> Plataforma integrada de monitoramento ambiental por satélite para detecção precoce de queimadas e enchentes.

🌐 **[SkyGuard](https://gs-1sem-dqfxbqehdkbgf9ed.brazilsouth-01.azurewebsites.net/)**

---

## 📋 Sobre o Projeto

O **SkyGuard** usa dados orbitais, imagens satelitais, clima e histórico ambiental para identificar riscos, detectar eventos e apoiar decisões preventivas em regiões vulneráveis do Brasil.

### Problema que resolve
Eventos extremos como queimadas e enchentes causam prejuízos ambientais, sociais e econômicos devastadores. Muitas regiões não possuem monitoramento local suficiente, e a resposta costuma ser tardia. O SkyGuard transforma dados satelitais brutos em alertas acionáveis em menos de 15 minutos.

### Conexão com ODS
| ODS | Título | Conexão |
|-----|--------|---------|
| 🏙️ ODS 11 | Cidades e Comunidades Sustentáveis | Proteção de comunidades vulneráveis a desastres |
| 🌍 ODS 13 | Ação Contra a Mudança Global do Clima | Monitoramento de eventos climáticos extremos |
| 🌿 ODS 15 | Vida Terrestre | Preservação de ecossistemas ameaçados por queimadas |

---

## 🏗️ Arquitetura

```
GitHub (push) → GitHub Actions → Azure App Service → URL Pública
                     │
                     └── Autenticação via GitHub Secrets (Publish Profile)

Azure Key Vault ──── Gerenciamento de secrets
Application Insights ── Monitoramento e alertas
```

### Stack
- **Runtime:** Node.js 18.x + Express.js
- **Hospedagem:** Azure App Service (F1)
- **CI/CD:** GitHub Actions
- **Segurança:** GitHub Secrets + Azure Key Vault + IAM (RBAC)
- **Monitoramento:** Azure Application Insights
- **Região:** Brazil South

---

## 🚀 Pipeline CI/CD

O deploy é automatizado a cada `git push` na branch `main`:

1. ✅ Checkout do código
2. ✅ Configuração do Node.js 18.x
3. ✅ Instalação de dependências (`npm install`)
4. ✅ Login no Azure via Publish Profile (GitHub Secret)
5. ✅ Deploy no Azure App Service

```yaml
# .github/workflows/azure.yml
on:
  push:
    branches: [main]
```

---

## 🔒 Segurança

| Recurso | Configuração |
|---------|-------------|
| GitHub Secrets | `AZURE_PUBLISH_PROFILE` — credencial de deploy |
| Azure Key Vault | `kv-gs-1sem` — secret `APP-ENV` |
| IAM | Role `Key Vault Secrets Officer` atribuída |

---

## 📊 Monitoramento

- **Application Insights:** `gs-1sem` — captura traces, métricas e erros em tempo real
- **Alert Rule:** `alerta-requisicoes-falhas` — dispara quando `Failed requests > 0` (Severidade: Warning)
- **Variável de ambiente:** `APPLICATIONINSIGHTS_CONNECTION_STRING`

---

## 👥 Equipe

| Integrante | Responsabilidade |
|-----------|----------------|
| Heitor Farias | Cloud, DevOps & Desenvolvimento |
| Guilherme Daher | Visão Computacional |
| Vinicius Yamashita | RPA |
| Gabriel Freitas | Big Data |
| Lucca Alexandre | IA e ML |

---

## 📁 Estrutura do Projeto

```
gs-1sem-2026/
├── .github/
│   └── workflows/
│       └── azure.yml       # Pipeline CI/CD
├── public/
│   └── index.html          # Landing page SkyGuard
├── server.js               # Servidor Express
├── package.json
├── .gitignore
└── README.md
```

---

**Global Solution 2026 · FIAP · Turma 1SEM**
