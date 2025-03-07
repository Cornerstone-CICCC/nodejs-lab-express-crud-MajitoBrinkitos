//Get list of employees
const getEmployees = async () => {
    try {
        const res = await fetch('http://localhost:3500/employees', {
            method: 'GET'
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch employees: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
};

const displayEmployees = async () => {
    const employees = await getEmployees();
    const employeeList = document.getElementById('employee-list');

    if (employees && employeeList) {
        employeeList.innerHTML = ''; // Clear existing list
        employees.forEach(employee => {
            const listItem = document.createElement('li');
            listItem.textContent = employee.name;
            employeeList.appendChild(listItem);
        });
    }
};

// Call displayEmployees once the page is loaded
window.addEventListener('DOMContentLoaded', displayEmployees);
