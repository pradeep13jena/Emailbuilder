## Getting Started

To use this project, clone it from GitHub and follow these steps:

1. **Install Dependencies**: Run the following command to install all required dependencies for both the front-end and back-end. As both the frontend and backend are in the same root folder there are 3 npm projects created. For frontend, backend and main folder.

   - Root:

   ```bash
   npm install
   ```

   - Backend:

   ```bash
   cd backend
   npm install
   ```

   - Frontend:

   ```bash
   cd frontend
   npm install
   ```

2. As everything is set you do not need to run frontend and backend seperately because i have use `concurrently` as it runs both backend and frontend at once.

   ```bash
   npm run dev
   ```

3. Once you run this code your project will run the frontend in `http://localhost:5173` and the backend in `http://localhost:5000`
