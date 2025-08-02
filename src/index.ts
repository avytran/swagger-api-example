import express from 'express';
import userRoutes from './routes/user.route';
import swaggerUi from 'swagger-ui-express';
import YAML from "yaml";
import fs from "fs";
import path from "path";

const app = express();
const port = 8080;

// Load YAML (dùng __dirname vì khi deploy Vercel sẽ copy file sang thư mục riêng)
const filePath = path.join(process.cwd(), "src/learn-swagger.yaml");
const swaggerDocument = YAML.parse(fs.readFileSync(filePath, "utf8"));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;