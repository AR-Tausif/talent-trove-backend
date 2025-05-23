# Talent Trove. Hiring Management Application

## Postman documentation. [click here](https://documenter.getpostman.com/view/30147054/2sB2ixjtd2) to view endpoints
https://documenter.getpostman.com/view/30147054/2sB2ixjtd2

### Features

![image](https://github.com/user-attachments/assets/1b77f41e-dc31-4243-8b59-fec212488ee7)


### Recommended Folder Structure:

```bash

project-root/
│
├── src/
│ ├── api/                                     # Group controllers, routes, and validation by feature
│ │ ├── user/
│ │ │ ├── user.controller.ts             # User controller
│ │ │ ├── user.route.ts                   # User routes
│ │ │ ├── user.validation.ts            # User input validation (optional)
│ │ │ └── user.service.ts                # User-specific services
│ ├──  database/
│ │ ├──  Redis.database.js
│ │ ├── Mongo.database.js
│ │ └── auth/
│ │ ├── auth.controller.ts               # Auth controller
│ │ ├── auth.route.ts                     # Auth routes
│ │ ├── auth.service.ts                   # Auth service
│ │ └── auth.validation.ts               # Auth validation (optional)
│ │
│ ├── config/                                 # App configuration (environment, database, etc.)
│ │ ├── database.ts                        # Database connection
│ │ ├── env.ts                                # Environment variable configuration
│ │ └── logger.ts                            # Logger configuration
│ │
│ ├── middlewares/                         # Custom middleware (authentication, error handling)
│ │ ├── error.middleware.ts              # Centralized error handling
│ │ ├── auth.middleware.ts              # Auth middleware for protected routes
│ │ └── validate.middleware.ts          # Validation middleware for request schemas
│ │
│ ├── models/                                   # Mongoose/Sequelize models or DB schemas
│ │ ├── user.model.ts                         # User model (Mongoose, Sequelize, etc.)
│ │ └── auth.model.ts                         # Auth-related model (tokens, sessions, etc.)
│ │
│ ├── services/                                  # Business logic and reusable services
│ │ ├── email.service.t                        # Email service (send emails)
│ │ ├── auth.service.ts                        # Authentication and authorization service
│ │ └── user.service.ts                         # User-related services (CRUD operations)
│ │
│ ├── utils/                                        # Helper functions/utilities (non-business logic)
│ │ ├── httpResponse.ts                       # Standardized response format
│ │ ├── constants.ts                            # App constants
│ │ └── hash.ts                                   # Password hashing utility
│ │
│ ├── validations/                               # Centralized validation schemas (using Zod, Joi, etc.)
│ │ ├── user.validation.ts                     # User-related validation
│ │ └── auth.validation.ts                    # Auth validation
│ │
│ ├── app.ts                                        # Initialize Express app
│ └── index.ts                                      # Main entry point to start the server
│
├── dist/                                             # Compiled JavaScript files (from TypeScript)
│
├── node_modules/                              # Dependencies
│
├── .env                                              # Environment variables
├── .eslintignore                                  # ESLint ignore patterns
├── .eslintrc.json                                  # ESLint configuration
├── .gitignore                                      # Ignore node_modules and dist
├── package.json                                 # Project dependencies and scripts
├── tsconfig.json                                 # TypeScript configuration
└── README.md


```
