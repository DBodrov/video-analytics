const express = require("express");
const pathToSwaggerUi = require("./swagger-ui-dist").absolutePath();

const PORT = 3099;

const app = express();

app.use(express.static(pathToSwaggerUi));
app.listen(PORT);
console.info(`Swagger-UI is hosted at http://localhost:${PORT}`);
