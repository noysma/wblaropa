function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.getElementById('menu');
    
    menuIcon.classList.toggle('menu-open');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// Function to handle location change and enable/disable the "Embroidery Size" dropdown
function handleLocationChange() {
    const location = document.getElementById('location').value;
    const embroiderySizeDropdown = document.getElementById('embroidery-size');

    if (location === "back") {
        embroiderySizeDropdown.classList.remove("hidden");
    } else {
        embroiderySizeDropdown.classList.add("hidden");
        embroiderySizeDropdown.value = ""; // Reset the selection
    }
    handleDropdownChange(); // Update image immediately
}


// Add event listener for Location dropdown
document.addEventListener("DOMContentLoaded", () => {
    const locationSelect = document.getElementById("location");
    const embroiderySizeSelect = document.getElementById("embroidery-size");

    if (locationSelect) {
        locationSelect.addEventListener("change", handleLocationChange);
    }

    // Ensure the initial state is set correctly
    handleLocationChange();
});


// Function to handle dropdown changes and update the image
function handleDropdownChange() {
    // Get dropdown values
    const color = document.getElementById('color').value;
    const size = document.getElementById('embroidery-size').value;
    const location = document.getElementById('location').value;

    // Get the image element
    const image = document.getElementById('displayed-image');

    // Update image based on conditions
    if (color === "grey" && size === "20x20" && location === "back") {
        image.src = "imgs/Chaleco Gris Back 20x20.png";
        image.alt = "Grey Chaleco Back 20x20";
    } else if (color === "grey" && size === "25x25" && location === "back") {
        image.src = "imgs/Chaleco Gris Back 25x25.png";
        image.alt = "Grey Chaleco Back 25x25";
    } else if (color === "grey" && size === "25x35" && location === "back") {
        image.src = "imgs/Chaleco Gris Back 25x35.png";
        image.alt = "Grey Chaleco Back 25x35";
    } else if (color === "grey" && location === "borders") {
        image.src = "imgs/Chaleco Gris Bordes.png";
        image.alt = "Grey Chaleco Borders";
    } else if (color === "grey" && location === "complete") {
        image.src = "imgs/Chaleco Gris bordado Completo.png";
        image.alt = "Brown Chaleco Borders";         
    } else if (color === "beige" && size === "20x20" && location === "back") {
        image.src = "imgs/Chaleco Beige Back 20x20.png";
        image.alt = "Brown Chaleco Back 20x20";
    } else if (color === "beige" && size === "25x25" && location === "back") {
        image.src = "imgs/Chaleco Beige Back 25x25.png";
        image.alt = "Brown Chaleco Back 25x25";
    } else if (color === "beige" && size === "25x35" && location === "back") {
        image.src = "imgs/Chaleco Beige Back 25x35.png";
        image.alt = "Brown Chaleco Back 25x35";
    } else if (color === "beige" && location === "borders") {
        image.src = "imgs/Chaleco Beige Bordes.png";
        image.alt = "Brown Chaleco Borders";
    } else if (color === "beige" && location === "complete") {
        image.src = "imgs/Chaleco Beige Completo.png";
        image.alt = "Brown Chaleco Borders";        
    } else {
        // Default cases
        if (color === "grey") {
            image.src = "imgs/Chaleco Laropa Front.png"; // Default image for grey
            image.alt = "Grey Customizable Clothing";
            if(location === "back"){
                image.src = "imgs/Chaleco BACK.png"; // Default image for grey back
                image.alt = "Grey Customizable Clothing";
            }
        } else if (color === "beige") { 
            image.src = "imgs/Chaleco Beige Laropa.png"; // Default image for beige
            image.alt = "Brown Customizable Clothing";
            if(location === "back"){
                image.src = "imgs/Chaleco back beige.png"; // Default image for beige back
                image.alt = "Grey Customizable Clothing";
            }
        }
    }
    // Handle price update based on location and embroidery size
    let priceText = "";
    if (location === "borders") {
        priceText = "262 EUR - 1’230.000 COP";
    } else if (location === "complete") {
        priceText = "290 EUR - 1’361.000 COP";
    } else if (location === "back") {
        if (size === "20x20") {
            priceText = "247 EUR - 1’160.000 COP";
        } else if (size === "25x25") {
            priceText = "254 EUR - 1’196.000 COP";
        } else if (size === "25x35") {
            priceText = "263 EUR - 1’236.000 COP";
        }
    }

    // Update the price 
    document.getElementById('price-value').textContent = priceText;    
}


// Attach event listeners to dropdowns
document.getElementById('color').addEventListener('change', handleDropdownChange);
document.getElementById('size').addEventListener('change', handleDropdownChange);
document.getElementById('location').addEventListener('change', handleDropdownChange);
document.getElementById('embroidery-size').addEventListener('change', handleDropdownChange);
