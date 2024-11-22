const spinner = () => {  
    document.getElementById("pets").classList.remove("grid");
    document.getElementById("pets").innerHTML = `
        <div class="flex justify-center items-center">
            <span class="loading loading-bars loading-lg"></span>
        </div>
    `;
  };