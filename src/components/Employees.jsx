
import Employee from "./Employee";
import './Employees.css';

export default function Employees() {
  
  const employees = [
    { name: 'Edwin Ortega Jr.', position: 'Manager', salary: 100000, status: 'Active' },
    { name: 'Jei Navarro', position: 'Developer', salary: 160000, status: 'Active' },
    { name: 'Aj Manas', position: 'Designer', salary: 55000, status: 'Active' },
    { name: 'Jaybee Sucal', position: 'Manager', salary: 150000, status: 'Active' },
    { name: 'Lebrown James', position: 'Developer', salary: 122000, status: 'Active' },
    { name: 'Mikha Mot', position: 'Designer', salary: 53000, status: 'Active' },
    { name: 'Irish Taller', position: 'Manager', salary: 140000, status: 'Active' },
    { name: 'Mike Bustamante', position: 'Developer', salary: 200000, status: 'Active' },
    { name: 'John Ericson Brigildo', position: 'Designer', salary: 86000, status: 'Not Active' },
    { name: 'Lexy Lore', position: 'Developer', salary: 158000, status: 'Not Active' },
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