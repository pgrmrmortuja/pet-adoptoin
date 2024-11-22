// Function to sort pets by price in descending order
const sortPetsByPrice = (pets) => {
    return pets.sort((a, b) => {
        // If the price is null or undefined, treat it as 0
        const priceA = a.price || 0;
        const priceB = b.price || 0;
        return priceB - priceA; // Sort in descending order
    });
};

// Function to load pets and sort them when the button is clicked
const loadAndSortPets = (category) => {
    const url = category 
        ? `https://openapi.programming-hero.com/api/peddy/category/${category}` 
        : "https://openapi.programming-hero.com/api/peddy/pets";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const sortedPets = sortPetsByPrice(data.pets);
            displayPets(sortedPets); // Display the sorted pets
        })
        .catch((error) => console.log(error));
};

// Event listener for the "Sort by Price" button
const sortButton = document.getElementById("sort-button"); // Make sure this ID matches the button in your HTML
sortButton.addEventListener("click", () => {
    const activeCategory = document.querySelector(".category-btn.active")?.id.split("-")[1]; // Get active category
    loadAndSortPets(activeCategory); // Load and sort pets for the active category
});
