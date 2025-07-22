import express from 'express';
import userRoutes from './routes/user.route';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from './swagger/swaggerOptions';

const app = express();
const port = 8080;

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
