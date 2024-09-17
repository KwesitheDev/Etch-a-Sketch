document.addEventListener('DOMContentLoaded', () => {
    
    let container = document.querySelector('.container');
    if (!container) {
        container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    }

    // Create button for new grid
    const newGridButton = document.createElement('button');
    newGridButton.textContent = 'New Grid';
    newGridButton.style.marginBottom = '20px';
    document.body.insertBefore(newGridButton, container);

    // Set up initial grid size
    let gridSize = 16;

    // Function to create the grid
    function createGrid(size) {
        
        container.innerHTML = '';

        // Set up container styles
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.width = '500px';
        container.style.height = '500px';
        container.style.backgroundColor = '#fff';
        container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

        // Calculate square size
        const squareSize = 500 / size;

        // Create grid squares
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.boxSizing = 'border-box';
            square.style.border = '1px solid #ddd';

            // Add hover effect
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });

            container.appendChild(square);
        }
    }


    createGrid(gridSize);

    // New Grid Button
    newGridButton.addEventListener('click', () => {
        let newSize = prompt('Enter the number of squares per side for the new grid (max 100):');
        newSize = parseInt(newSize);
        
        if (newSize && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });
});