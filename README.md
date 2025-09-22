A RESTful API built with Node.js, Express, TypeScript, and Prisma for managing users, products, and product updates.

This application provides a complete backend solution for tracking product development and updates with user authentication.

## Features

- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **Product Management**: CRUD operations for products with user ownership
- **Update Tracking**: Manage product updates with status tracking (IN_PROGRESS, SHIPPED, DEPRECATED)
- **Update Points**: Detailed update points for granular tracking
- **Database Integration**: PostgreSQL with Prisma ORM
- **Input Validation**: Express-validator for request validation
- **TypeScript**: Full TypeScript support with type safety
- **Testing**: Jest testing framework setup

## Architecture

The application follows a modular architecture:

```
src/
├── config/          # Environment-specific configurations
├── handlers/        # Route handlers for API endpoints
├── modules/         # Authentication and middleware modules
├── router.ts        # API route definitions
├── server.ts        # Express server configuration
└── index.ts         # Application entry point
```

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Api-for-users-products-product-updates
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL=
   JWT_SECRET=
   PORT=
   NODE_ENV=
   STAGE=
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm run build
npm start
```

### Testing

```bash
npm test
```

The API will be available at `http://localhost:3000` (or your configured PORT).

## API Endpoints

### Authentication

#### Create User

```http
POST /createuser
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

#### Sign In

```http
POST /signin
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

### Products (Protected Routes)

_All product endpoints require JWT authentication_

#### Get All Products

```http
GET /api/product
Authorization: Bearer <jwt-token>
```

#### Get Single Product

```http
GET /api/product/:id
Authorization: Bearer <jwt-token>
```

#### Create Product

```http
POST /api/product
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "name": "string"
}
```

#### Update Product

```http
PUT /api/product/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "name": "string"
}
```

#### Delete Product

```http
DELETE /api/product/:id
Authorization: Bearer <jwt-token>
```

### Updates (Protected Routes)

_All update endpoints require JWT authentication_

#### Get All Updates

```http
GET /api/update
Authorization: Bearer <jwt-token>
```

#### Get Single Update

```http
GET /api/update/:id
Authorization: Bearer <jwt-token>
```

#### Create Update

```http
POST /api/update
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "string",
  "body": "string",
  "productId": "string"
}
```

#### Update Update

```http
PUT /api/update/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "string",
  "body": "string",
  "productId": "string"
}
```

#### Delete Update

```http
DELETE /api/update/:id
Authorization: Bearer <jwt-token>
```

### Update Points (Protected Routes)

_Update point endpoints are defined but not yet implemented_

## 🗄️ Database Schema

The application uses the following data models:

- **User**: User accounts with authentication
- **Product**: Products owned by users
- **Update**: Product updates with status tracking
- **UpdatePoint**: Detailed points within updates

### Relationships

- User → Products (One-to-Many)
- Product → Updates (One-to-Many)
- Update → UpdatePoints (One-to-Many)

## Configuration

The application supports multiple environments:

- **Development**: Local development settings
- **Staging**: Staging environment configuration
- **Production**: Production environment settings

Configuration is managed through the `src/config/` directory with environment-specific files.

## 📦 Dependencies

### Core Dependencies

- **express**: Web framework
- **prisma**: Database ORM
- **@prisma/client**: Prisma client
- **jsonwebtoken**: JWT token handling
- **bcrypt**: Password hashing
- **express-validator**: Input validation
- **morgan**: HTTP request logger

### Development Dependencies

- **typescript**: TypeScript compiler
- **ts-node**: TypeScript execution
- **jest**: Testing framework
- **@types/node**: Node.js type definitions

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Protected API routes
- CORS handling

## 📝 Environment Variables

| Variable       | Description                  | Required                  |
| -------------- | ---------------------------- | ------------------------- |
| `DATABASE_URL` | PostgreSQL connection string | Yes                       |
| `JWT_SECRET`   | Secret key for JWT signing   | Yes                       |
| `PORT`         | Server port                  | No (default: 3000)        |
| `NODE_ENV`     | Environment mode             | No (default: development) |
| `STAGE`        | Deployment stage             | No (default: local)       |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, send an email alegbeyemi@gmail.com

---

**Note**: This API is designed for managing product development workflows and update tracking.

Ensure proper authentication and authorization when integrating with frontend applications.
