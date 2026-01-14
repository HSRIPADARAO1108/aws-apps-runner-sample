const express = require('express');
const app = express();
// App Runner provides the port via environment variable; default to 8080
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Deployment Successful</h1><p>Your App Runner service is live.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});