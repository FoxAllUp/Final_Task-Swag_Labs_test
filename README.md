# Final Task - Swag Labs Test Automation

## Project Overview
This project is an automated test suite for the Swag Labs login functionality using WebDriverIO with the Mocha framework and Chai assertion library. The tests follow the **Page Object Model (POM)** pattern for maintainability and scalability.

## Technologies Used
- **Test Automation Tool:** WebDriverIO
- **Test Framework:** Mocha
- **Assertions:** Chai
- **Programming Language:** JavaScript (Node.js environment)
- **Browsers:** Google Chrome, Microsoft Edge
- **Test Pattern:** Page Object Model (POM)
- **Parallel Execution:** Enabled
- **Logging:** Implemented using selected WebDriverIO reporters

## Test Scenarios (UCs)
### **UC-1: Test Login Form with Empty Credentials**
1. Enter any credentials.
2. Clear both the input fields.
3. Click the "Login" button.
4. Verify that the error message **"Username is required"** appears.

### **UC-2: Test Login Form with Missing Password**
1. Enter any credentials.
2. Clear the "Password" field.
3. Click the "Login" button.
4. Verify that the error message **"Password is required"** appears.

### **UC-3: Test Login Form with Valid Credentials**
1. Enter valid credentials.
3. Click the "Login" button.
4. Verify that the dashboard title is **"Swag Labs"** after login.

## Project Setup and Execution
### **Installation**
1. Clone this repository:
   ```sh
   git clone https://github.com/FoxAllUp/Final_Task-Swag_Labs_test.git
   cd Final_Task-Swag_Labs_test
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### **Running Tests**
To execute the test suite:
```sh
npm run test
```
or
```sh
npx wdio wdio.conf.js
```

## Additional Features
- **Parallel Execution:** Tests are executed in parallel for efficiency.
- **Cross-Browser Testing:** Runs on **Chrome** and **Edge**.
- **Logging:** Test execution logs are generated for debugging.

## Notes
- Optional logging and reports can be configured in `wdio.conf.js`.
- The project follows best practices for maintainability and scalability using POM.

### Original Task Description:
Task description
Launch URL: https://www.saucedemo.com/
UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".
UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
Please, add task description as README.md into your solution!
To perform the task use the various of additional options:
Test Automation tool: WebDriverIO;
Browsers: 1) Edge; 2) Chrome;
Locators: CSS;
Patterns: Page Object;
Assertions: Use from the selected framework;
[Optional] Loggers: Use from the selected framework.

---
**Author:** Richárd Hanzel  
**Date:** March 2025
