interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string;
}

const student1: Student = {

    firstName: "Thabiso", 
    lastName: "Molefe",
    age: 23,
    location: "Johannesburg"
};

const student2: Student = {
    
    firstName: "Eric",
    lastName: "Wilson",
    age: 28,
    location: "Cape Town"
};

const studsList: Student[] = [student1, student2]
const table: HTMLTableElement = document.createElement('table');
studsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const fNameCell: HTMLTableCellElement = document.createElement('td');
    fNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(fNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);