let count = 0;

// Get element where the count state should be updated.
const value = document.querySelector('#count');
// Get all buttons in an NodeList
const buttons = document.querySelectorAll('.btn');

// Iterate through each button and add event listener.
buttons.forEach((b) => {
  b.addEventListener('click', (e) => {
    // Check which one is clicked and then update the count accordingly.
    // Get all classes of current button.
    const styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      // Reset the value to 0.
      count = 0;
    }

    // Change color of the span.
    if (count > 0) value.style.color = 'green';
    if (count < 0) value.style.color = 'red';
    if (count === 0) value.style.color = '#222';

    // Update UI with the current state.
    value.textContent = count;
  });
});
