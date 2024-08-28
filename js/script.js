// Select all the gallery images
const galleryItems = document.querySelectorAll('.gallery img');

// Object to store active filters
const filters = {};

// Select all filter checkboxes and add event listeners
document.querySelectorAll('.filter').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const category = checkbox.getAttribute('data-category');
    const value = checkbox.value;

    // If checkbox is checked, add the filter to the filters object
    if (checkbox.checked) {
      if (!filters[category]) filters[category] = [];
      filters[category].push(value);
    } 
    // If unchecked, remove the filter from the filters object
    else {
      filters[category] = filters[category].filter(item => item !== value);
      if (filters[category].length === 0) delete filters[category];
    }

    // Filter the gallery based on active filters
    filterGallery();
  });
});

// Function to filter the gallery based on active filters
function filterGallery() {
  galleryItems.forEach(item => {
    // Check if the item matches all active filters
    const matches = Object.keys(filters).every(category => {
      const filterValues = filters[category];
      const itemValue = item.getAttribute(`data-${category}`);
      return filterValues.some(filterValue => itemValue.includes(filterValue));
    });

    // Show or hide the item based on the match
    item.style.display = matches ? 'block' : 'none';
  });
}

// Initially show all images if no filters are applied
filterGallery();


const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        // Move the indicator based on the index of the clicked link item
        indicator.style.left = `${index * 95 + 48}px`;  // Adjust positioning accordingly
    });
});