// Get all the accordition items
const accorditionItems = document.querySelectorAll(".accordion-item");

// Loop through each accordion item
accorditionItems.forEach(item => {
  // Get the header button for each item
  const header = item.querySelector(".accordion-header");

  // Add click event listener to the header 
  header.addEventListener("click", ()=> {
    // Check if this item is already open/active
    const isActive = item.classList.contains("active");

    // Close all accordion items first 
    // This ensures only one item is opened at a time
    accorditionItems.forEach(accorditionItem => {
      accorditionItem.classList.remove("active");
    });

    // If the clicked item wasn't active, open it
    // This creates a toggle effect when clicking the same item
    if(!isActive) {
      item.classList.add("active"); 
    }
  });
});

// Optional: Keyboard accessibilily enhancement
// Allow Enter and Space keys to trigger accordion 
accorditionItems.forEach(item => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("keydown", (e) => {
    //Check if Enter (13) or Space (32) key was pressed 
    if(e.keyCode = 13 || e.keyCode = 32) {
      e.preventDeafault(); // Prevent default scrolling on Space
      header.click(); // Trigger the click event
    }
  });
});

// open first item by default