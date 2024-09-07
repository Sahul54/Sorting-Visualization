let array = [];
const barsContainer = document.getElementById('bars');

// Function to generate bars from user input
function generateUserBars() {
  const input = document.getElementById('array-input').value;
  
  // Convert input string into an array of numbers
  array = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  
  if (array.length === 0) {
    alert("Please enter valid numbers separated by commas.");
    return;
  }

  // Generate the bars dynamically
  generateBars();
}

// Function to generate the bars based on array values
function generateBars() {
  barsContainer.innerHTML = ''; // Clear previous bars

  array.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`; // Scale height for visualization
    bar.textContent = value;
    barsContainer.appendChild(bar);
  });
}

// Function to perform Bubble Sort
async function bubbleSort() {
  let bars = document.querySelectorAll('.bar');
  let n = bars.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Change the color of the bars being compared
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      await delay(1000); // Delay for visualization

      let value1 = parseInt(bars[j].textContent);
      let value2 = parseInt(bars[j + 1].textContent);

      if (value1 > value2) {
        // Swap the bars' heights
        bars[j].style.height = `${value2 * 3}px`;
        bars[j].textContent = value2;
        bars[j + 1].style.height = `${value1 * 3}px`;
        bars[j + 1].textContent = value1;
      }

      // Reset the colors after comparison
      bars[j].style.backgroundColor = 'teal';
      bars[j + 1].style.backgroundColor = 'teal';
    }

    // Mark the last sorted bar as green
    bars[n - i - 1].style.backgroundColor = 'green';
  }
  
  // Mark the first bar as green after sorting is complete
  bars[0].style.backgroundColor = 'green';
}

// Helper function to introduce a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to start sorting when button is clicked
function startSort() {
  if (array.length > 0) {
    bubbleSort();
  } else {
    alert("Please enter array values and generate the bars first.");
  }
}
