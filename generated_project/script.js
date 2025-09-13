/*
 * Calculator script
 * Implements basic arithmetic with button and keyboard support.
 */

// Wrap everything to ensure DOM is ready and avoid polluting global scope
document.addEventListener('DOMContentLoaded', () => {
    // ==== DOM References ====
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    // ==== State Variables ====
    let currentInput = '';
    let previousValue = null; // stored as number
    let operator = null; // '+', '-', '*', '/'
    let shouldResetDisplay = false; // flag to clear display on next number entry

    // ==== Helper Functions ====
    const updateDisplay = (value) => {
        display.value = value;
    };

    const appendNumber = (num) => {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
        // Prevent multiple leading zeros (except when after decimal point)
        if (num === '0' && currentInput === '0') return;
        // Prevent multiple decimals
        if (num === '.' && currentInput.includes('.')) return;
        // If starting with a decimal point, prepend a leading zero for readability
        if (num === '.' && currentInput === '') {
            currentInput = '0.';
        } else {
            currentInput += num;
        }
        updateDisplay(currentInput);
    };

    const setOperator = (op) => {
        // If there is a pending operation and the user has entered a new number,
        // compute the previous result first.
        if (previousValue !== null && operator && !shouldResetDisplay) {
            calculate();
        }
        previousValue = parseFloat(currentInput) || 0; // treat empty as 0
        operator = op;
        shouldResetDisplay = true;
    };

    const calculate = () => {
        if (operator === null || previousValue === null) {
            return; // nothing to compute
        }
        const current = parseFloat(currentInput) || 0;
        let result;
        switch (operator) {
            case '+':
                result = previousValue + current;
                break;
            case '-':
                result = previousValue - current;
                break;
            case '*':
                result = previousValue * current;
                break;
            case '/':
                if (current === 0) {
                    updateDisplay('Error');
                    // Reset state after error
                    clearAll();
                    return;
                }
                result = previousValue / current;
                break;
            default:
                return;
        }
        // Trim unnecessary decimal places (e.g., 2.0 -> 2)
        const formatted = Number.isInteger(result) ? result.toString() : result.toString();
        updateDisplay(formatted);
        // Prepare for next operation
        currentInput = formatted;
        previousValue = null;
        operator = null;
        shouldResetDisplay = true;
    };

    const clearAll = () => {
        currentInput = '';
        previousValue = null;
        operator = null;
        shouldResetDisplay = false;
        updateDisplay('');
    };

    // ==== Button Event Listeners ====
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            const action = button.getAttribute('data-action');

            if (value !== null) {
                // Digit or decimal point button
                appendNumber(value);
                return;
            }

            if (action) {
                switch (action) {
                    case 'add':
                        setOperator('+');
                        break;
                    case 'subtract':
                        setOperator('-');
                        break;
                    case 'multiply':
                        setOperator('*');
                        break;
                    case 'divide':
                        setOperator('/');
                        break;
                    case 'equals':
                        calculate();
                        break;
                    case 'clear':
                        clearAll();
                        break;
                    default:
                        // No other actions defined
                        break;
                }
            }
        });
    });

    // ==== Keyboard Support ====
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        // Digits and decimal point
        if (/^[0-9]$/.test(key)) {
            e.preventDefault();
            appendNumber(key);
            return;
        }
        if (key === '.') {
            e.preventDefault();
            appendNumber('.');
            return;
        }
        // Operators
        if (key === '+' || key === '-' || key === '*' || key === '/' ) {
            e.preventDefault();
            const map = { '+': '+', '-': '-', '*': '*', '/': '/' };
            setOperator(map[key]);
            return;
        }
        // Enter / = for equals
        if (key === 'Enter' || key === '=') {
            e.preventDefault();
            calculate();
            return;
        }
        // Escape for clear
        if (key === 'Escape') {
            e.preventDefault();
            clearAll();
            return;
        }
    });

    // Initialize display to empty (or 0 if preferred)
    updateDisplay('');
});

// Export functions for testing if module system is used (optional)
// Uncomment the line below when using ES modules.
// export { appendNumber, setOperator, calculate, clearAll };
