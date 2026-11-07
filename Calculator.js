
// Calculator Display - How to make the buttons display here in the input

// Establish direct memory link reference to input viewport element
const display = document.getElementById("display");

// Create a function to append display
function appendToDisplay(input) {
    display.value += input;
}

// Clear execution string entirely
function clearDisplay() {
    display.value = "";
}

// Track backspace mutations via string slicing manipulation
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Parse execution string and return arithmetic calculation result
function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        // Native runtime parsing logic of current algebraic content
        display.value = eval(display.value);

    } catch (error) {
        // Handle errors gracefully
        display.value = "Error";
    }
}

// Function to calculate percentage
function percentage() {
    try {
        if (display.value === "") {
            return;
        }

        display.value = eval(display.value) / 100;

    } catch (error) {
        display.value = "Error";
    }
}
