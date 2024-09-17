# Calculator

## Task
This is a simple calculator application built with JavaScript and Webpack. The interface allows input of up to 14 characters. In case of division by zero, an error message is displayed on the UI. If the result exceeds the 14-character limit, "Overflow" will be shown.

## How to Run the App
1. Clone the repository:
   ```bash
   git clone https://github.com/JulieBenchuk/inno-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd inno-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application in development mode:
   ```bash
   npm run start
   ```
5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure
- **src/**  
  Contains the main source files for the project.
    - **components/**  
      Contains `calculator.html` with the markup for the calculator interface.
    - **styles/**  
      Includes the styles for the calculator.
    - **utils/**  
      Includes the functions for calculation, validation, and constants used in the app.
    - **index.js**  
      Contains the logic for handling the calculator's functionality and interactions.
