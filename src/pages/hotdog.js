export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

  export const toggleTopping = (index) => {
    const topping = toppings[index];
    topping.selected = !topping.selected;
}

  export const renderToppings = (toppings) => {
    const toppingsVsechny = document.getElementById('toppings-vsechny');
    const toppingElements = toppingsVsechny.querySelectorAll('.topping');

    toppingElements.forEach((toppingElement, index) => {
        toppingElement.addEventListener('click', () => {
            toggleTopping(index)
        });
    });

    toppingsVsechny.innerHTML = '';

    

    toppings.forEach(topping => {
        const toppingDiv = document.createElement('div');
        toppingDiv.classList.add('topping');

        if (topping.selected) {
            toppingDiv.classList.add('topping--selected');
        }

        const nameH3 = document.createElement('h3');
        nameH3.textContent = `Název přísady: ${topping.name}`;

        const priceP = document.createElement('p');
        priceP.textContent = `Cena přísady: ${topping.price}`;

        toppingDiv.appendChild(nameH3);
        toppingDiv.appendChild(priceP);

        toppingsVsechny.appendChild(toppingDiv);
    });
}

