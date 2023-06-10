//Acquiring the elements from the html file
const leftItems = document.querySelectorAll(".left-items");
const rightItems = document.querySelectorAll(".right-items");
const resetButton = document.getElementById("reset");

//Event Listeners for Left Items
leftItems.forEach((item) => {
    // Dragstart
  item.addEventListener("dragstart", (event) => {
    const imageElement = event.target.querySelector("img");
    if (imageElement) {
      const imageSrc = imageElement.src;
      event.dataTransfer.setData("text/plain", imageSrc);
      event.target.classList.add("picked");
    }
  });

    // DragEnd
  item.addEventListener("dragend", (event) => {
      area.classList.add("filled");
    event.target.classList.remove("picked");
  });
});

//Event Listeners for right items
rightItems.forEach((area) => {
    // Dragover
  area.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    area.classList.add("dropped");
});

// DragLeave
area.addEventListener("dragleave", (event) => {
    area.classList.remove("dropped");
  });

    // Drop
  area.addEventListener("drop", (event) => {
    event.preventDefault();
    const imageSrc = event.dataTransfer.getData("text/plain");
    const image = document.createElement("img");
    image.src = imageSrc;
    area.innerHTML = "";
    area.appendChild(image);
    area.classList.remove("dropped");
  });
});

//Event listener for reset button
resetButton.addEventListener("click", () => {
  console.log("Reset clicked");
  rightItems.forEach((area) => {
    area.innerHTML = "";
    area.classList.remove("dropped");
    area.classList.remove("filled");
  });
});
