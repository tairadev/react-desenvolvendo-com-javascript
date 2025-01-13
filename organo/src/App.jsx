import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [employees, setEmployees] = useState([]);

  const newAddedEmployee = (employee) => {
    setEmployees([...employees, employee]);
    console.log(employees);
  };

  return (
    <>
      <div className='App'>
        <Banner />
        <Form onRegister={newAddedEmployee} />
      </div>
    </>
  );
}

export default App;
