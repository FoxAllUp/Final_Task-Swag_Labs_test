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
- **Data Provider:** Used for test parameterization
- **Logging:** Implemented using selected WebDriverIO reporters
- **Reporters:** JUnit, Allure (Optional)

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

### **Reports**
- **JUnit Report:** Generates structured XML reports.
- **Allure Report:** Provides detailed test execution results (optional).

## Additional Features
- **Parallel Execution:** Tests are executed in parallel for efficiency.
- **Cross-Browser Testing:** Runs on **Chrome** and **Edge**.
- **Logging:** Test execution logs are generated for debugging.
- **Data Parameterization:** Uses a Data Provider for flexible test inputs.

## Notes
- Optional logging and reports can be configured in `wdio.conf.js`.
- The project follows best practices for maintainability and scalability using POM.

---
**Author:** Richárd Hanzel  
**Date:** March 2025
