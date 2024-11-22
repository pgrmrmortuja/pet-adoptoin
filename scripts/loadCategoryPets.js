const loadCategoryPets = (category) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass(); // Remove active classes from all buttons

      spinner();

      // Find and style the active button
      const activeBtn = document.getElementById(`btn-${category}`);
      activeBtn.classList.add("bg-teal-500", "text-white", "border-teal-500"); // Active styles
      activeBtn.classList.remove("bg-white", "text-gray-700", "border-gray-300"); // Remove default styles


      setTimeout(() => {
        displayPets(data.data);
      }, 2000);


       // Function to display the pets
    })

    .catch((error) => console.log(error));
};


