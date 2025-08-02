import express from "express";
import userRoutes from "./routes/user.route.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import fs from "fs";
import path from "path";
import swaggerUiDist from "swagger-ui-dist";

const app = express();

// ✅ Đọc file YAML spec
const filePath = path.join(process.cwd(), "src/learn-swagger.yaml");
const swaggerDocument = YAML.parse(fs.readFileSync(filePath, "utf8"));

// ✅ Serve static file của Swagger UI
app.use("/api-docs", express.static(swaggerUiDist.getAbsoluteFSPath()));

// ✅ Setup Swagger UI + CSS + fetch spec từ endpoint riêng
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: { url: "/swagger.yaml" },
    customCssUrl: "https://unpkg.com/swagger-ui-dist/swagger-ui.css", // Dùng bản khớp với JS
  })
);
// ✅ Endpoint trả YAML spec
app.get("/swagger.yaml", (req, res) => {
  res.sendFile(filePath);
});

app.use(express.json());
app.use("/api/users", userRoutes);

export default app;
