const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = ""; // Clear previous categories

  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button
        id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')"
        class="category-btn flex items-center bg-white border border-gray-300 rounded-full p-4 hover:bg-gray-100 transition w-full sm:w-48 lg:w-56">
        <img src="${item.category_icon}" class="w-12 h-12 mr-4">
        <span class="font-bold text-lg">${item.category}</span>
      </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};



loadCategories();


