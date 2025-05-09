function showOnlyBasicOptions() {
    hideAllOptions();
    basicOptions.forEach(option => {
        option.style.display = 'block';
    });
}

// Show all options (15)
function showAllOptions() {
    allOptions.forEach(option => {
        option.style.display = 'block';
    });
}

// Add hover events
lessButton.addEventListener('mouseenter', showOnlyBasicOptions);
lessButton.addEventListener('mouseleave', hideAllOptions);

moreButton.addEventListener('mouseenter', showAllOptions);
moreButton.addEventListener('mouseleave', hideAllOptions);

function showOnlyBasicImages() {
    console.log('Hovered LESS');
    hideAllImages();
    basicImages.forEach(img => {
        img.style.display = 'block';
    });
}

const lessButton = document.querySelector('.choice-btn.less');
const moreButton = document.querySelector('.choice-btn.more');

const optionsContainer = document.querySelector('.options-container');
const optionsGrid = document.querySelector('.options-grid');

// Start with both hidden
optionsContainer.style.display = 'none';
optionsGrid.style.display = 'none';

// "Less" button shows options-container (basic styles only)
lessButton.addEventListener('click', function() {
    optionsContainer.style.display = 'block';
    optionsGrid.style.display = 'none';
});

// "More" button shows options-grid (full list of 15 styles)
moreButton.addEventListener('click', function() {
    optionsContainer.style.display = 'none';
    optionsGrid.style.display = 'grid';  // Assuming grid layout for full list
});


const basicOptions = document.querySelector('.basic-options');
const allOptions = document.querySelector('.all-options');

// Default state (show basic at first if you want)
basicOptions.style.display = 'flex';

lessButton.addEventListener('click', () => {
    basicOptions.style.display = 'flex';
    allOptions.style.display = 'none';
});

moreButton.addEventListener('click', () => {
    basicOptions.style.display = 'none';
    allOptions.style.display = 'grid';
});

