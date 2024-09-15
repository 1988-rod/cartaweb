const menu = [
    {
        category: 'ENTRADAS',
        items: [
            { name: 'Empanadas', price: 1430 },
            { name: 'Matambre casero', price: 4000 },
            { name: 'Rabas', price: 9500 }
        ]
    },
    {
        category: 'PASTAS',
        items: [
            { name: 'Tallarines', price: 4500 },
            { name: 'Sorrentinos', price: 5000 },
            { name: 'Canelones', price: 5500 }
        ]
    },
    {
        category: 'SALSAS',
        items: [
            { name: 'Crema', price: 2000 },
            { name: 'Mixta', price: 2500 }
        ]
    }
];

function displayMenu() {
    const menuDiv = document.getElementById('menu');

    menu.forEach(section => {
        // Create section header
        const sectionHeader = document.createElement('h2');
        sectionHeader.textContent = section.category;
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';

        sectionDiv.appendChild(sectionHeader);

        // Create menu items
        section.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const itemName = document.createElement('span');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.textContent = `$${item.price.toLocaleString()}`;

            itemDiv.appendChild(itemName);
            itemDiv.appendChild(itemPrice);

            sectionDiv.appendChild(itemDiv);
        });

        menuDiv.appendChild(sectionDiv);
    });
}

displayMenu();
