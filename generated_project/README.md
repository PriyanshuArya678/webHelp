# Calculator Web App

## Project Overview
A simple, responsive web‑based calculator built with **HTML**, **CSS**, and **JavaScript**. It supports basic arithmetic operations, keyboard input, and provides clear error handling for invalid expressions.

---

## Tech Stack
- **HTML5** – Structure of the calculator UI.
- **CSS3** – Styling and responsive layout.
- **JavaScript (ES6 modules)** – Core logic, event handling, and calculation engine.

---

## Features
- **Basic Operations**: addition, subtraction, multiplication, division.
- **Keyboard Support**: use numbers, operators (`+ - * /`), `Enter` to evaluate, and `Backspace`/`Delete` to clear.
- **Clear & Delete**: `C` button clears the entire expression, `⌫` deletes the last character.
- **Error Handling**: displays user‑friendly messages for syntax errors, division by zero, or overflow.
- **Responsive Design**: works on desktop and mobile browsers.
- **Modular Code**: JavaScript split into logical modules for easy maintenance and extension.

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calculator-webapp.git
   cd calculator-webapp
   ```
2. **Open the application**
   - Simply open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
   - No server or additional dependencies are required.

---

## Usage Guide
- **Mouse Interaction**: Click the on‑screen buttons to build an expression. Press `=` or the **Enter** key to evaluate.
- **Keyboard Interaction**:
  - Numbers `0‑9` and operators `+ - * /` input directly.
  - `Enter` → evaluate the current expression.
  - `Backspace` or `Delete` → clear the entire expression (same as the `C` button).
  - `Esc` → delete the last character (same as the `⌫` button).
- **Error Messages**:
  - *"Invalid expression"* – syntax error or unsupported characters.
  - *"Division by zero"* – attempted to divide by zero.
  - *"Result too large"* – calculation overflow beyond safe numeric limits.
  - Errors appear in the display area and are cleared once a new valid input is entered.

---

## Development Notes
### File Structure
```
calculator-webapp/
│   index.html      # Main HTML page – loads the UI and script modules
│   style.css       # Styling for the calculator layout
│   script.js       # Entry point JavaScript that ties UI to logic modules
│   README.md       # Project documentation (this file)
```

### Adding New Features
- **UI Changes**: Modify `index.html` for new buttons or layout adjustments, and update `style.css` for styling.
- **Logic Extensions**: Add new functions in `script.js` or create additional modules (e.g., `utils.js`). Import them using ES6 `import` statements.
- **Event Handling**: Extend the event listeners in `script.js` to bind new UI elements.

### JavaScript Module Interaction
- `script.js` acts as the orchestrator:
  - It selects DOM elements, registers click and keyboard listeners, and updates the display.
  - Core calculation is performed using JavaScript’s `eval` (wrapped in a safe try/catch). For more complex extensions, replace this with a dedicated parser module.
  - Error handling logic resides within the same file to keep the project lightweight.

---

## License
[Insert License Here]
