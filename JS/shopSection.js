let currentPage = 1;
const itemsPerPage = 9;

const shopContainer = document.getElementById("shopContainer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

function renderShopItems() {
    const selectedCategories = [...document.querySelectorAll('.filter-item input[type="checkbox"]:checked')]
        .map(cb => cb.id);
    
    const filteredItems = shopItemsAPI.filter(item => 
        selectedCategories.includes(item.category) || selectedCategories.includes("all")
    );

    shopContainer.innerHTML = "";
    const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
    paginatedItems.forEach(item => {
        const shopItemContainer = document.createElement('div');
        shopItemContainer.classList.add("shopItemContainer");
        shopItemContainer.innerHTML = `
            <div class="itemImgContainer">
                <img src="${item.itemImg}" />
            </div>
            <div class="itemInfoContainer jacques-francois-regular">
                <p>${item.itemDesc}</p>
                <p>${item.itemPrice}</p>
            </div>
            <div class="shopBtnContainer">
                <a href="itemDetail.html?productID=${item.productID}" class="btn shopBtn">View Detail</a>
            </div>
        `;
        shopContainer.appendChild(shopItemContainer);
    });

    previousBtn.style.display = currentPage === 1 ? "none" : "inline-block";
    nextBtn.style.display = currentPage * itemsPerPage >= filteredItems.length ? "none" : "inline-block";
}

document.querySelectorAll('.filter-item input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
        currentPage = 1;  // Reset to first page when filters change
        renderShopItems();
    });
});

renderShopItems();

previousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        renderShopItems();
    }
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage++;
    renderShopItems();
});
