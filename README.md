# Number Converter

**Number Converter** is a React-based application that allows you to convert decimal numbers to binary and hexadecimal. This project was implemented to practice and verify skills related to number conversion and to review concepts related to computer organization.

## Features

- **Decimal to Binary Conversion:** Enter a decimal number and get its binary representation.
- **Decimal to Hexadecimal Conversion:** Enter a decimal number and get its hexadecimal representation.
- **Binary to Decimal Conversion:** Enter a binary number and get its decimal representation.
- **Hexadecimal to Decimal Conversion:** Enter a hexadecimal number and get its decimal representation.
- **IEEE754 Representation:** Displays the IEEE754 representation of the entered decimal number.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/number-converter.git

2. **Navigate to the project directory:**

   ```bash
   cd number-converter
   
3. **Install dependencies:**
   
   ```bash
   npm install
   
4. **Start the application:**

   ```bash
   npm start
   
## Project Structure
- **src/App.js: Main component of the application.
- **src/convertor/Convertor.js: Number conversion component.
- **src/components/NumberInput.js: Reusable component for number input.
- **src/utils/IEE754.js: Utility function to get the IEEE754 representation of a decimal number.
- **src/App.css: Stylesheet for the application.

## Testing
**This project uses Jest and React Testing Library for testing. To run the tests, use the following command:**

   ```bash
   npm test
