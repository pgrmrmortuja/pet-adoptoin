const loadPets = () => {
  // Show loading spinner here (if implemented)
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
        // Hide loading spinner here (if implemented)
        displayPets(data.pets);
    })
    .catch((error) => {
        console.log(error);
        // Optionally display an error message to the user
    });
};


  loadPets();

