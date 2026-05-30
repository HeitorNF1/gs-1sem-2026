const appInsights = require("applicationinsights");

const connectionString = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING;

console.log(
  "APPINSIGHTS:",
  connectionString
    ? "connection string encontrada"
    : "connection string NÃO encontrada"
);

if (connectionString) {
  appInsights.setup(connectionString)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .start();

  console.log("APPINSIGHTS: configuração iniciada com sucesso");

  appInsights.defaultClient.trackTrace({
    message: "Application Insights iniciado com sucesso"
  });
} else {
  console.warn("APPINSIGHTS: variável APPLICATIONINSIGHTS_CONNECTION_STRING não encontrada");
}

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  if (appInsights.defaultClient) {
    appInsights.defaultClient.trackEvent({
      name: "HomePageAccessed"
    });
  }

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/teste-appinsights', (req, res) => {
  if (appInsights.defaultClient) {
    appInsights.defaultClient.trackTrace({
      message: "Rota /teste-appinsights acessada"
    });

    appInsights.defaultClient.trackEvent({
      name: "TesteApplicationInsights"
    });
  }

  res.send("Teste enviado para o Application Insights");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});