const swaggerJSDoc = require("swagger-jsdoc");
const documentationRoot = `${__dirname}/apiDocs`;

const title = "User Service APIs",
  description = "Swagger APIs",
  components = {
    securitySchemes: {
      UserSecurity: {
        type: "apiKey",
        name: "x-access-token",
        in: "header",
      }
    },
  };
const versionOne = {
  swaggerDefinition: {
    components,
    openapi: "3.0.0",
    info: { title, description, version: "1.0.0" },
    servers: [{ url: "/api/v1", description: "Version 1" }],
  },
  apis: [`${documentationRoot}/v1/*.js`],
};
module.exports = {
  v1: swaggerJSDoc(versionOne),
};
