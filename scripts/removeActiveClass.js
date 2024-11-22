const removeActiveClass = () => {
  const allButtons = document.querySelectorAll(".category-btn");
  allButtons.forEach((btn) => {
    btn.classList.remove("bg-teal-500", "text-white", "border-teal-500"); // Remove active styles
    btn.classList.add("bg-white", "text-gray-700", "border-gray-300"); // Add default styles back
  });
};





