
import Employee from './Employee';
import './Employees.css'; 

export default function Employees() {
  
  const employees = [
    { name: 'John Doe', position: 'Manager', salary: 50000, status: 'Active' },
    { name: 'Jane Smith', position: 'Developer', salary: 60000, status: 'Active' },
    { name: 'Alice Johnson', position: 'Designer', salary: 55000, status: 'Active' },
    { name: 'Bob Brown', position: 'Manager', salary: 52000, status: 'Active' },
    { name: 'Charlie Davis', position: 'Developer', salary: 62000, status: 'Active' },
    { name: 'Eve White', position: 'Designer', salary: 53000, status: 'Active' },
    { name: 'Frank Black', position: 'Manager', salary: 51000, status: 'Active' },
    { name: 'Grace Green', position: 'Developer', salary: 64000, status: 'Active' },
    { name: 'Hank Blue', position: 'Designer', salary: 56000, status: 'Not Active' },
    { name: 'Ivy Red', position: 'Developer', salary: 58000, status: 'Not Active' },
  ];

  return (
    <div className="employees-container">
      <h1 className="title">Employee List</h1>
      <table className="employees-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Names</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee
              key={index}
              no={index + 1}
              name={employee.name}
              position={employee.position}
              salary={employee.salary}
              status={employee.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
