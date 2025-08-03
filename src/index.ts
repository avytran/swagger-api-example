import express from "express";
import userRoutes from "./routes/user.route.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import path from "path";

const app = express();

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const filePath = path.join(process.cwd(), "src/learn-swagger.yaml");
const swaggerDocument = YAML.parse(filePath);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl: "https://unpkg.com/swagger-ui-dist/swagger-ui.css", 
  })
);

app.get("/swagger.yaml", (req, res) => {
  res.sendFile(filePath);
});

app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
