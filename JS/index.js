let currentPage = 1;
const itemsPerPage = 6;

const nextButton = document.getElementById('NextBtn');
const previousButton = document.getElementById('PreviousbBtn');

const coffeeSelection = document.getElementById('coffeeSelectionLeft');
function renderCoffeeSelection(){
    coffeeSelection.innerHTML = "";
        // Calculate start and end indices for the items to display
    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, coffeeSelectionAPI.length);
    
        // Slice the array to get the items for the current page
    const itemsToDisplay = coffeeSelectionAPI.slice(start, end);
    itemsToDisplay.forEach(coffee=>{
        const coffeeDiv = document.createElement('div');
        coffeeDiv.classList.add("coffeeSelectionContainer")        
        coffeeDiv.innerHTML = `
                <div class="coffeeImageContainer">
                    <img src=${coffee.imgURL} />
                </div>
                <div class="coffeeTextContainer jacques-francois-regular">
                    <div class="coffeeSelectionFont">
                        <h4>${coffee.name.toUpperCase()}</h4>
                        <p>${coffee.ingredient}</p>
                        <p>${coffee.price}</p>
                    </div>
                    <div class="coffeeSelectionFont coffeeSelectionBtn">
                      <a href="../HTML/signUpForm.html" class="btn">Order Now</a>
                    </div>
                </div>
        `;
    
        coffeeSelection.appendChild(coffeeDiv);
     });
     previousButton.disabled = currentPage === 1;
     nextButton.disabled = currentPage === Math.ceil(coffeeSelectionAPI.length / itemsPerPage);
    
};

renderCoffeeSelection();

previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        renderCoffeeSelection();
    }
    previousButton.disabled = currentPage === 1;
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if ((currentPage * itemsPerPage) < coffeeSelectionAPI.length) {
        currentPage++;
        renderCoffeeSelection();
    }
    nextButton.disabled = currentPage === Math.ceil(coffeeSelectionAPI.length / itemsPerPage);
});