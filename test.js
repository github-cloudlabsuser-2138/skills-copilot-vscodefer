const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(operation, num1, num2) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error: Division by zero';
        }
        return num1 / num2;
      default:
        return 'Invalid operation';
    }
  }
  
  console.log('Simple Calculator');
  console.log('Operations:\n1. Addition (+)\n2. Subtraction (-)\n3. Multiplication (*)\n4. Division (/)');
  
  readline.question('Choose an operation (+, -, *, /): ', (operation) => {
    readline.question('Enter the first number: ', (firstInput) => {
      const num1 = parseFloat(firstInput);
      readline.question('Enter the second number: ', (secondInput) => {
        const num2 = parseFloat(secondInput);
        const result = calculate(operation, num1, num2);
        console.log(`Result: ${result}`);
        readline.close();
      });
    });
  });