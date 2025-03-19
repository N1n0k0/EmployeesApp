// App.js
import './App.css';
import EmployeesTable from './node_modules_src/Employee';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeForm from './node_modules_src/EmployeeForm';
import NoPage from './node_modules_src/NoPage';
import Layout from './node_modules_src/Layout'; 
import './node_modules_src/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Layout> {/* Wrap Routes with Layout */}
        <Routes>
          <Route index element={<EmployeesTable />} />
          <Route path="employeeForm" element={<EmployeeForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;