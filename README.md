# Employee-Management-System
## Deployment Links
-  [Live](<https://employee-mana-gement.netlify.app/>)
-  LoginID : abhinavanand3154@gmail.com
-  Password : Abhi@123
# Full-Stack Employee Management System with Cloudinary Integration

## Overview
This is a Full-Stack Employee Management System that allows users to perform CRUD operations on employee records while managing profile pictures using Cloudinary. The backend is built with Node.js and Express.js, the frontend with React.js and Redux, and MongoDB is used as the database.

## Features
- User Authentication using JWT.
- Employee CRUD operations (Create, Read, Update, Delete).
- Profile picture upload and storage using Cloudinary.
- Pagination and search functionality.
- Secure API endpoints.
- Responsive and modern UI.

---

## Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary (for image storage)
- Multer (for file uploads)
- JWT (for authentication)

### Frontend:
- React.js
- Redux (for state management)
- React Router (for navigation)
- Axios (for API calls)
- Tailwind CSS (for styling)

### Deployment:
- Frontend: **Netlify**
- Backend: **Render**
- Database: **MongoDB Atlas**

---

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas or local instance
- Cloudinary account for image hosting

### Backend Setup
```bash
# Clone the repository
git clone <GITHUB_REPO_URL>
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

### Frontend Setup
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Create a .env file and add the API base URL
REACT_APP_API_URL=<your_backend_api_url>

# Start the frontend server
npm run dev
```

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate and get a JWT token

### Employee Management
- `POST /api/employees` - Create a new employee
- `GET /api/employees` - Get all employees (supports pagination & search)
- `GET /api/employees/:id` - Get an employee by ID
- `PUT /api/employees/:id` - Update employee details
- `DELETE /api/employees/:id` - Delete an employee

### Image Upload
- `POST /api/upload` - Upload an employee profile picture to Cloudinary

---

## Deployment Links
-  [Live](<https://employee-mana-gement.netlify.app/>)

---

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the MIT License.

---

## Contact
For any inquiries, feel free to reach out:
- Email: [abhinavanand3154@gmail.com](mailto:abhinavanand3154@gmail.com)
- LinkedIn: [Abhinav Anand](https://www.linkedin.com/in/abhinavanand3154/)
