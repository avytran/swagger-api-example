import express from 'express';
import userRoutes from './routes/user.route';
import swaggerUi from 'swagger-ui-express';
import YAML from "yaml";
import fs from "fs";
import path from "path";

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();
const port = 8080;

const filePath = path.join(__dirname, "learn-swagger.yaml");
const swaggerDocument = YAML.parse(fs.readFileSync(filePath, "utf8"));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCssUrl: CSS_URL })
);


app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;