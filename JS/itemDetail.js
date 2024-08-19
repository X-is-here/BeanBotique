function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Function to load product details
function loadProductDetails() {
    const productID = getURLParameter('productID');
    const product = itemDetailAPI.find(item => item.productID === productID);

    if (product) {
        document.querySelector('.detailImage').innerHTML = `<img src="${product.url}" alt="${product.name}" class='imgDetail'>`;
        document.querySelector('.detailDescription h1').innerText = product.name;
        document.querySelector('.detailList').innerHTML = `
            <li>Price: ${product.price}</li>
            <li>Brand: ${product.brand}</li>
            <li>Color: ${product.color}</li>
            <li>${product.description}</li>
        `;
    } else {
        document.querySelector('.detailDescription').innerHTML = `<h1>Product not found!</h1>`;
    }
}

// Call function on page load
window.onload = loadProductDetails;