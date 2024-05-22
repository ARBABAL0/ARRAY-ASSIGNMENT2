//PART3 Employess


// Define a named OF Employees
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
  };
  
  // Define an array named employees containing employee objects
  const employees: Employee[] = [
    {
      name: 'ARBAB ALI',
      hoursWorked: 20,
      hourlyRate: 25,
      salary: 0,
    },
    {
      name: 'ASHAN',
      hoursWorked: 15,
      hourlyRate: 25,
      salary: 0,
    },
  ];
  
  // Implement a function named calculateSalary
  function calculateSalary(employee: Employee): void {
    const totalSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
      employee.salary = totalSalary + (totalSalary * 0.1);
    } else {
      employee.salary = totalSalary;
    }
  }
  
  // Calculate the salary for each employee
  employees.forEach((employee) => {
    calculateSalary(employee);
    console.log(`Employee Name: ${employee.name}, Salary: ${employee.salary}`);
  });
  
  
  