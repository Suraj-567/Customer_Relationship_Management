# Customer Relationship Management System (CRM)



**Project ID:** P08  
**Course:** UE23CS341A  
**Academic Year:** 2025  
**Semester:** 5th Sem  
**Campus:** RR Campus  
**Branch:** CSE  
**Section:** J  
**Team:** Alchemist

---

## 📋 Project Description

A comprehensive **Customer Relationship Management (CRM)** application built with modern web technologies. This CRM system helps businesses manage customers, employees, tickets, and company information efficiently.

This repository contains the source code and documentation for the Customer Relationship Management project, developed as part of the **UE23CS341A** course at **PES University**.


---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19.1.1 with React Router 7.9.4
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 3.4.18
- **UI Components:** Lucide Icons, React Icons
- **HTTP Client:** Axios 1.13.0
- **Animation:** Framer Motion 12.23.24
- **Notifications:** React Hot Toast 2.6.0
- **Testing:** Jest, React Testing Library

### Backend
- **Runtime:** Node.js
- **Framework:** Express 5.1.0
- **Database:** MongoDB with Mongoose 8.19.2
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Password Hashing:** bcryptjs 3.0.3
- **Email:** Nodemailer 7.0.10
- **CORS:** Express CORS 2.8.5
- **Logging:** Morgan 1.10.1
- **Testing:** Jest, Supertest

---

## 📁 Project Structure
```
PESU_RR_CSE_J_P08_Customer_Relationship_Management_Alchemist/
│
├── client/                          # Frontend (React)
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── AdminProtectedRoute.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   └── ...
│   │   ├── pages/                   # Page components
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── EmployeeLogin.jsx
│   │   │   ├── BusinessLogin.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── Customers.jsx
│   │   │   ├── Tickets.jsx
│   │   │   ├── CustomerTickets.jsx
│   │   │   ├── ApprovedCompanies.jsx
│   │   │   ├── CRMApproval.jsx
│   │   │   └── ...
│   │   ├── assets/                  # Images and media
│   │   ├── App.jsx                  # Main app component with routing
│   │   ├── main.jsx                 # Entry point
│   │   ├── App.css                  # Global styles
│   │   └── index.css                # Base styles
│   ├── tests/                       # Test files
│   ├── package.json                 # Dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind CSS config
│   ├── jest.config.js               # Jest testing config
│   └── eslint.config.js             # ESLint configuration
│
├── server/                          # Backend (Node.js/Express)
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── models/                      # Database schemas
│   │   ├── User.js                  # User model (Admin, Employee, Customer)
│   │   ├── Company.js               # Company model
│   │   ├── Employee.js              # Employee model
│   │   ├── Customer.js              # Customer model
│   │   └── Ticket.js                # Support ticket model
│   ├── controllers/                 # Business logic
│   │   ├── authController.js        # Authentication logic
│   │   ├── adminController.js       # Admin operations
│   │   ├── companyController.js     # Company management
│   │   ├── employeeController.js    # Employee management
│   │   ├── customerController.js    # Customer management
│   │   └── ticketController.js      # Ticket management
│   ├── routes/                      # API endpoints
│   │   ├── authRoutes.js            # Auth endpoints
│   │   ├── adminRoutes.js           # Admin endpoints
│   │   ├── companyRoutes.js         # Company endpoints
│   │   ├── employeeRoutes.js        # Employee endpoints
│   │   ├── customerRoutes.js        # Customer endpoints
│   │   └── ticketRoutes.js          # Ticket endpoints
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT authentication middleware
│   ├── tests/                       # Test files
│   │   ├── unit/                    # Unit tests
│   │   ├── integration/             # Integration tests
│   │   ├── system/                  # System tests
│   │   └── setupTestDB.js           # Test database setup
│   ├── server.js                    # Main server file
│   ├── package.json                 # Dependencies
│   ├── jest.config.js               # Jest testing config
│   └── .env                         # Environment variables (local only)
│
├── .github/                         # GitHub workflows and templates
│   └── workflows/
│       └── ci-cd.yml                # CI/CD Pipeline
├── README.md                        # This file
├── SECURITY.md                      # Security policy
└── package-lock.json
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas cloud account)
- **Git**

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/pestechnology/PESU_RR_CSE_J_P08_Customer_Relationship_Management_Alchemist.git
cd PESU_RR_CSE_J_P08_Customer_Relationship_Management_Alchemist
```

#### 2. Setup Backend Server
```bash
cd server
npm install
```

**Create `.env` file in the `server/` directory:**
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/crm_db
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
SMTP_HOST=your_email_host
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
```

**Start the backend server:**
```bash
# Development mode with nodemon (auto-reload)
npm run dev

```

Server will run on `http://localhost:5001`

#### 3. Setup Frontend Client

In a new terminal:
```bash
cd client
npm install
```

**Start the development server:**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (or as shown in terminal)

---

## 🔄 CI/CD Pipeline (GitHub Actions)

This project uses an **automated CI/CD pipeline** defined in `.github/workflows/ci-cd.yml` that runs on every push and pull request. The pipeline ensures code quality, security, and reliability before deployment.

### 📊 Pipeline Overview

The CI/CD pipeline consists of **6 sequential stages** that run automatically:
```
1️⃣ BUILD → 2️⃣ TEST → 3️⃣ COVERAGE → 4️⃣ LINT → 5️⃣ SECURITY → 6️⃣ DEPLOY
```

Each stage depends on the previous one, ensuring quality gates are met before proceeding.

### 🔔 Pipeline Triggers

The pipeline automatically runs on:

**Push Events:**
- When code is pushed to `main` branch
- When code is pushed to `developer` branch
- When code is pushed to any `feature/**` branch

**Pull Request Events:**
- When a PR is opened to `developer` or `main` branch
- When a PR is synchronized (new commits pushed)
- When a PR is reopened

### Pipeline Stages

#### 1️⃣ BUILD STAGE
**Purpose:** Install and validate all dependencies

**What it does:**
- Checks out the repository code
- Sets up Node.js v20 environment
- Installs client dependencies (React, Vite, etc.)
- Installs server dependencies (Express, MongoDB, etc.)
- Handles missing folders gracefully

#### 2️⃣ TEST STAGE
**Purpose:** Run automated unit, integration, and system tests

**Test Framework:** Jest  
**Coverage:** Code coverage metrics for both frontend and backend

**What it does:**
- Runs all backend tests in `/server/tests/`
- Runs all frontend tests in `/client/tests/`
- Generates coverage reports
- Uploads test results as artifacts

#### 3️⃣ COVERAGE STAGE
**Purpose:** Generate detailed HTML coverage reports

**What it does:**
- Generates HTML coverage reports for both client and server
- Creates visual representation of code coverage
- Shows which lines/functions are tested
- Uploads coverage reports as artifacts

#### 4️⃣ LINT STAGE
**Purpose:** Check code quality and style consistency

**Tool:** ESLint

**What it does:**
- Analyzes all JavaScript/JSX code
- Checks for code style violations, unused variables, potential bugs
- Saves reports in human-readable text format
- Uploads lint reports as artifacts

#### 5️⃣ SECURITY STAGE
**Purpose:** Scan for vulnerable dependencies

**Tool:** npm audit

**What it does:**
- Scans all npm packages for known vulnerabilities
- Reports severity levels (critical, high, moderate, low)
- Outputs JSON format for detailed analysis
- Uploads security reports as artifacts

#### 6️⃣ DEPLOYMENT STAGE
**Purpose:** Create deployment artifact with all reports

**What it does:**
- Downloads all artifacts from previous stages
- Creates deployment folder with complete source code
- Creates ZIP archive for deployment
- Uploads deployment artifact

### 📊 Accessing Pipeline Results

1. Go to your repository on GitHub
2. Click **"Actions"** tab
3. Select the workflow run you want to review
4. View detailed logs for each stage

**Download Artifacts:**
- `test-results` - Test reports
- `coverage-report` - Coverage HTML
- `lint-reports` - Code quality
- `security-reports` - Vulnerability scan
- `deployment_artifact` - Complete deployment package

### ✅ Pipeline Quality Gates

| Stage | Check | Purpose |
|-------|-------|---------|
| **BUILD** | Dependencies install | Ensure all packages are available |
| **TEST** | Unit/Integration/System tests | Verify code functionality |
| **COVERAGE** | Code coverage metrics | Ensure adequate test coverage |
| **LINT** | Code style & quality | Maintain code standards |
| **SECURITY** | npm audit scan | Identify vulnerable dependencies |
| **DEPLOY** | Artifact creation | Prepare for deployment |

---

## 📊 Database Models

### User Schema
```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  role: String (admin, employee, customer),
  createdAt: Date,
  updatedAt: Date
}
```

### Company Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  registrationNumber: String (unique),
  industry: String,
  employeeCount: Number,
  status: String (pending, approved, rejected),
  createdAt: Date,
  updatedAt: Date
}
```

### Employee Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  name: String,
  email: String,
  companyId: ObjectId (reference to Company),
  department: String,
  position: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Customer Schema
```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  name: String,
  email: String,
  phone: String,
  companyId: ObjectId (reference to Company),
  status: String (active, inactive),
  createdAt: Date,
  updatedAt: Date
}
```

### Ticket Schema
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  status: String (open, in-progress, closed),
  priority: String (low, medium, high),
  customerId: ObjectId (reference to Customer),
  assignedTo: ObjectId (reference to Employee),
  companyId: ObjectId (reference to Company),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔑 Key Features

### Admin Panel
- ✅ Dashboard with analytics
- ✅ Approve/Reject company registrations
- ✅ View all approved companies
- ✅ Manage system users

### Company Manager
- ✅ Company registration and profile management
- ✅ Employee management (add, edit, delete)
- ✅ Customer management
- ✅ Create and track support tickets
- ✅ View ticket history
- ✅ Support ticket management
- ✅ Dashboard with key metrics

### Employee
- ✅ View assigned tickets
- ✅ Update ticket status
- ✅ Manage customer information
- ✅ Personal dashboard


---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register        - Register new company
POST   /api/auth/login           - User login
POST   /api/auth/logout          - User logout
POST   /api/auth/refresh         - Refresh JWT token
```

### Company Management
```
GET    /api/company              - Get company details
PUT    /api/company              - Update company info
POST   /api/company/register     - Register company
```

### Employee Management
```
GET    /api/employees            - Get all employees
POST   /api/employees            - Add new employee
PUT    /api/employees/:id        - Update employee
DELETE /api/employees/:id        - Delete employee
```

### Customer Management
```
GET    /api/customers            - Get all customers
POST   /api/customers            - Add new customer
PUT    /api/customers/:id        - Update customer
DELETE /api/customers/:id        - Delete customer
```

### Ticket Management
```
GET    /api/tickets              - Get all tickets
POST   /api/tickets              - Create new ticket
GET    /api/tickets/:id          - Get ticket details
PUT    /api/tickets/:id          - Update ticket
DELETE /api/tickets/:id          - Delete ticket
```

### Admin Management
```
GET    /api/admin/dashboard      - Admin dashboard data
GET    /api/admin/approvals      - Pending company approvals
POST   /api/admin/approve/:id    - Approve company
POST   /api/admin/reject/:id     - Reject company
GET    /api/admin/companies      - All approved companies
```

---

## 🧪 Testing

### Frontend Tests
```bash
cd client

# Run all tests with coverage
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

**Test Files:**
- `AdminDashboard.test.jsx`
- `AdminLayout.test.jsx`
- `ApprovedCompanies.test.jsx`
- `BusinessLogin.test.jsx`
- `CRMApproval.test.jsx`
- `CustomerTickets.test.jsx`
- `DashboardLayout.test.jsx`

### Backend Tests
```bash
cd server

# Run all tests with coverage
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test suite
npm test -- unit/
npm test -- integration/
npm test -- system/
```
#### Integration Tests
- `AuthRoutesIntegration.test.js` - Tests authentication endpoints (register, login, logout)
- `CompanyRoutesIntegration.test.js` - Tests company management endpoints
- `CustomerRoutesIntegration.test.js` - Tests customer CRUD operations
- `EmployeeRoutesIntegration.test.js` - Tests employee management endpoints
- `TicketRoutesIntegration.test.js` - Tests ticket creation and management

#### System Tests
- `FullUserRegistrationFlow.test.js` - Tests complete user registration workflow from start to finish
-  `employeeMannagement.test.js`- complete employee flow check

#### Unit Tests
- `adminControllerUnit.test.js` - Tests admin controller functions (approvals, dashboard)
- `authControllerUnit.test.js` - Tests authentication logic (token generation, validation)
- `customerControllerUnit.test.js` - Tests customer controller business logic
- `employeeControllerUnit.test.js` - Tests employee controller functions
- `middlewareAuth.test.js` - Tests JWT authentication middleware
- `modelEmployeeValidation.test.js` - Tests Employee model validation rules
- `modelUserValidation.test.js` - Tests User model validation rules
- `ticketControllerUnit.test.js` - Tests ticket controller functions
- `setupTestDB.js` - Database setup and teardown utilities for testing

---

## 🔐 Authentication & Authorization

### JWT Token Flow
1. User logs in with credentials
2. Server validates and returns JWT token
3. Client stores token in localStorage
4. Token sent in `Authorization: Bearer <token>` header
5. Middleware verifies token for protected routes

### Protected Routes
- Admin routes require `admin` role
- Manager routes require `manager` role
- Employee routes require `employee` role
- Customer routes require `customer` role

---

## 🎨 Styling & Design

- **Tailwind CSS** for utility-first styling
- **Responsive Design** for mobile, tablet, and desktop
- **Custom Components** with consistent styling
- **Animation** with Framer Motion for smooth UI transitions
- **Icons** from Lucide React and React Icons

---

## 📝 Development Guidelines

### Branching Strategy
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Urgent production fixes

### Commit Message Format
Follow conventional commit:
```
feat:     Add new feature
fix:      Fix bug
docs:     Documentation changes
style:    Code style (formatting, missing semicolons, etc)
refactor: Code refactoring without changing functionality
test:     Add/update tests
chore:    Dependencies, build tools, etc
```

**Examples:**
```bash
git commit -m "feat: add customer dashboard page"
git commit -m "fix: correct authentication token expiry"
```

### Code Review Process
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "feat: description"`
3. Push to remote: `git push origin feature/your-feature`
4. Create Pull Request to `develop`
5. Pipeline automatically runs on PR
6. Review pipeline results and code review
7. Address feedback and update PR
8. Merge after approval and passing pipeline

---

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally or MongoDB Atlas is accessible
- Check `MONGODB_URI` in `.env` file
- Verify network connectivity

**Port Already in Use**
```bash
# Find process using port 5001
lsof -i :5001

# Kill the process
kill -9 <PID>
```

### Frontend Issues

**Port Conflict**
```bash
# Vite will auto-use next available port
npm run dev
```

**Dependencies Conflict**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Pipeline Issues

**BUILD Stage Fails**
- Ensure Node.js v20 is installed
- Check `package.json` for correct dependencies

**TEST Stage Fails**
- Verify environment variables are set correctly
- Check for hardcoded paths or environment-specific code

**SECURITY Stage Vulnerabilities**
```bash
# Update packages
npm update

# Or force update
npm audit fix --force
```

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jest Testing Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)

---

## 🔒 Security

See [SECURITY.md](./SECURITY.md) for security policies and vulnerability reporting.

**Key Security Practices:**
- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ CORS enabled for trusted origins
- ✅ Environment variables for sensitive data
- ✅ Input validation and sanitization
- ✅ HTTP-only cookies for token storage
- ✅ Automated security scanning via npm audit

---

## 📄 License

This project is developed for **educational purposes** as part of the **PES University UE23CS341A curriculum**.

---

## 📞 Contact & Support

For questions or issues, please:
1. Check existing GitHub Issues
2. Create a new Issue with detailed description
3. Contact the development team

---

## 🎯 Future Enhancements

- [ ] Email notifications for ticket updates
- [ ] Advanced reporting and analytics
- [ ] Customer portal with self-service options
- [ ] Mobile app (React Native)
- [ ] AI-powered ticket classification
- [ ] Real-time notifications with WebSockets
- [ ] Multi-language support
- [ ] Role-based dashboard customization
- [ ] Docker containerization
- [ ] Kubernetes deployment




