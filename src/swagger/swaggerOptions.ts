const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API (TypeScript)',
      version: '1.0.0',
      description: 'Tài liệu Swagger cho API người dùng',
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export default swaggerOptions;
