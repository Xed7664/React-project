
export default function Employee({ no, name, position, salary, status }) {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(salary);
  };

  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{position}</td>
      <td>{status === 'Active' ? formatSalary(salary) : 'N/A'}</td>
      <td>{status}</td>
    </tr>
  );
}
