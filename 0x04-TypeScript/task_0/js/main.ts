// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table with student information
const table = document.createElement("table");
const headerRow = table.insertRow(0);

// Create table headers
const headers = ["First Name", "Location"];
headers.forEach((headerText, index) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

// Add student data to the table
studentsList.forEach((student) => {
  const row = table.insertRow(-1);

  // Create table cells for each student
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  // Fill the cells with student data
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
