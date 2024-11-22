const displayDetails = (petData) => {
    const detailContainer = document.getElementById("modal-content");
  
    detailContainer.innerHTML = `
    <img src="${petData.image}">    
    <p><span class="font-bold">Breed:</span> ${petData.breed || "Not Added"}</p>
    <p><span class="font-bold">Category:</span> ${petData.category || "Not Added"}</p>
    <p><span class="font-bold">Date of Birth:</span> ${petData.date_of_birth || "Not Added"}</p>
    <p><span class="font-bold">Price: </span>${petData.price || "Not Added"}</p>
    <p><span class="font-bold">Gender:</span> ${petData.gender || "Not Added"}</p>
    <p><span class="font-bold">Details:</span> ${petData.pet_details || "Not Added"}</p>
    `;
  
    

    document.getElementById("customModal").showModal();
  };






