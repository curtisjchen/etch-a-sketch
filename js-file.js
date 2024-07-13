const container = document.getElementById('container');
const button = document.getElementById('new-grid-button');

button.addEventListener('click', () => {
    let gridSize = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
});

function createGrid(size) {
    container.innerHTML = ''; // Clear the existing grid
    container.style.setProperty('--grid-size', size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add event listener for hover effect
        square.addEventListener('mouseenter', () => {
            square.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

// Initialize with a default grid
createGrid(16);
