// Select modal elements
const adoptModal = document.getElementById('adoptModal');
const countdownElement = document.getElementById('countdown');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to show the modal with countdown
function showAdoptModal() {
  let countdownValue = 3;
  countdownElement.textContent = countdownValue;

  // Show the modal
  adoptModal.classList.add('modal-open');

  // Start countdown
  const countdownInterval = setInterval(() => {
    countdownValue--;
    countdownElement.textContent = countdownValue;

    if (countdownValue === 0) {
      // Close the modal after the countdown
      clearInterval(countdownInterval);
      closeAdoptModal();
    }
  }, 1000); // Countdown every second (1000 ms)
}

// Function to close the modal
function closeAdoptModal() {
  adoptModal.classList.remove('modal-open');
}

// Event listener for manually closing the modal
closeModalBtn.addEventListener('click', closeAdoptModal);

// Add event listener for "Adopt" button in displayPets function
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('adopt-button')) {
    showAdoptModal(); // Show modal when "Adopt" button is clicked
  }
});
