// Array to hold liked pets
let likedPets = [];

// Function to display liked pets in the right-side grid
const displayLikedPets = () => {
    const likedPetsContainer = document.getElementById("likedPets");
    likedPetsContainer.innerHTML = ""; // Clear previous liked pets

    likedPets.forEach((pet) => {
        const likedPetCard = document.createElement("div");
        likedPetCard.classList = "bg-white border rounded-lg shadow-md p-2";
        likedPetCard.innerHTML = `
      <img src="${pet.image}" class="w-full h-auto rounded mb-2">
      <h3 class="text-center font-bold">${pet.pet_name}</h3>
    `;
        likedPetsContainer.append(likedPetCard);
    });
};

// Modified displayPets function
// const displayPets = (pets) => {
//     const petsContainer = document.getElementById("pets");
//     petsContainer.innerHTML = "";

//     if (pets.length === 0) {
//         petsContainer.classList.remove("grid");
//         petsContainer.innerHTML = `
//       <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
//         <img src="./images/error.webp" /> 
//         <h2 class="text-center text-xl font-bold"> No Information Available </h2> 
//         <p class="text-center text-lg"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
//         its layout. The point of using Lorem Ipsum is that it has a. </p>
//       </div>`;
//     } else {
//         petsContainer.classList.add("grid");
//     }

//     pets.forEach((pet) => {
//         const card = document.createElement("div");
//         card.classList = "card card-compact border p-3";
//         card.innerHTML = `
//       <img src="${pet.image}" class="rounded-lg mb-4">
//       <h3 class="text-lg font-bold">${pet.pet_name}</h3>
      
//       <p class="text-gray-600">
//         <span class="flex items-center">
//           <img src="./images/Frame (1).png" alt="">
//           Breed: ${pet.breed}
//         </span>
//       </p>
      
//       <p class="text-gray-600">
//         <span class="flex items-center">
//           <img src="./images/Frame (2).png" alt="">
//           Birth: ${pet.date_of_birth || "Unknown"}
//         </span>
//       </p>
      
//       <p class="text-gray-600">
//         <span class="flex items-center">
//           <img src="./images/Frame (3).png" alt="">
//           Gender: ${pet.gender}
//         </span>
//       </p>
      
//       <p class="text-gray-600">
//         <span class="flex items-center">
//           <img src="./images/Frame (4).png" alt="">
//           Price: ${pet.price !== null ? pet.price + " $" : "Price not available"}
//         </span>
//       </p>
      
//       <div class="flex justify-between mt-4">
//         <button class="like-button btn flex items-center justify-center border bg-white px-3 py-2 hover:bg-gray-200">
//           <img src="./images/Frame 1171276314.png" alt="">
//         </button>

//         <button class="btn border bg-white text-teal-600 font-bold px-3 py-2 rounded">Adopt</button>

//         <button class="details-button btn border bg-white text-teal-600 font-bold px-3 py-2 rounded" onclick="loadDetails('${pet.petId}')">Details</button>
//       </div>
//     `;

//         // Add the card to the container
//         petsContainer.append(card);

//         // Handle the "Like" button click
//         const likeButton = card.querySelector('.like-button');
//         likeButton.addEventListener('click', () => {
//             if (!likedPets.some(likedPet => likedPet.petId === pet.petId)) {
//                 likedPets.push(pet); // Add pet to liked pets if not already liked
//                 displayLikedPets();   // Update liked pets grid
//             }
//         });
//     });
// };



