//PART3 Employess
// Define an array named employees containing employee objects
var employees = [
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
function calculateSalary(employee) {
    var totalSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employee.salary = totalSalary + (totalSalary * 0.1);
    }
    else {
        employee.salary = totalSalary;
    }
}
// Calculate the salary for each employee
employees.forEach(function (employee) {
    calculateSalary(employee);
    console.log("Employee Name: ".concat(employee.name, ", Salary: ").concat(employee.salary));
});
