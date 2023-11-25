##### Overview
This project involves working with Node.js to build basic and advanced functionalities. The tasks cover various aspects such as handling command line input, reading files synchronously and asynchronously, creating HTTP servers using Node's HTTP module and Express, and organizing a complex HTTP server using Express with ES6 features.

## Prerequisites
Node.js (version 12.x.x)
npm (Node Package Manager)

## Getting Started
Clone the repository:
git clone https://github.com/your-username/alx-backend-javascript.git

## Navigate to the project directory
cd alx-backend-javascript

## Install dependencies:
npm install

## Task-wise Explanation
Task 0: Executing basic javascript with Node JS
File: 0x05-Node_JS_basic/0-console.js
Create a function named displayMessage that prints the given string to STDOUT.

Task 1: Using Process stdin
File: 0x05-Node_JS_basic/1-stdin.js
Create a program that prompts the user with "Welcome to Holberton School, what is your name?" and reads the input.
Display "Your name is: [INPUT]" and "This important software is now closing" when the user ends the program.


Task 2: Reading a file synchronously with Node JS
File: 0x05-Node_JS_basic/2-read_file.js
Create a function countStudents that reads the provided database file synchronously.
Log the number of students in each field along with the list of first names.


Task 3: Reading a file asynchronously with Node JS
File: 0x05-Node_JS_basic/3-read_file_async.js
Create a function countStudents that reads the provided database file asynchronously using Promises.
Log the number of students in each field along with the list of first names.

Task 4: Create a small HTTP server using Node's HTTP module
File: 0x05-Node_JS_basic/4-http.js
Create a small HTTP server using Node's HTTP module that responds with "Hello Holberton School!" for any endpoint.


Task 5: Create a more complex HTTP server using Node's HTTP module
File: 0x05-Node_JS_basic/5-http.js
Create a more complex HTTP server using Node's HTTP module.
Respond with "Hello Holberton School!" for the root endpoint and display student information for "/students" endpoint.

Task 6: Create a small HTTP server using Express
File: 0x05-Node_JS_basic/6-http_express.js
Install Express and create a small HTTP server using Express that responds with "Hello Holberton School!".

Task 7: Create a more complex HTTP server using Express
File: 0x05-Node_JS_basic/7-http_express.js
Create a more complex HTTP server using Express.
Respond with "Hello Holberton School!" for the root endpoint and display student information for "/students" endpoint.


Task 8: Organize a complex HTTP server using Express
Directory: 0x05-Node_JS_basic/full_server
Organize the structure of the server with controllers and routes.
Create an App controller (AppController) and a Students controller (StudentsController).
Define routes in index.js and create a server in server.js that uses the controllers and routes.

## Running the Tests
Execute the following command to run tests:
npm run test

For a comprehensive test of the entire project, you can use:
npm run full-test

## Linting
Use ESLint for linting. Run the following command:
npm run lint

## Author
IBRAHIM RIKO rikohssn@gmail.com

## Acknowledgments
This project was developed as part of the ALX Software Engineering Program.

## License
This project is licensed under the MIT License.







