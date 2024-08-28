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
