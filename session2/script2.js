
function hideBasic(){
    $(".basic-options").css("display", "none")
}

function showBasic(){
    $(".basic-options").css("display", "block")
}

$(".more").click(hideBasic, showBasic)


function hideEverything(){
    $(".all-options").css("display", "none")
}

function showEverything(){
    $(".all-options").css("display", "block")
}

$(".less").click(hideEverything, showEverything)

// Function to show only basic options
function showOnlyBasicOptions() {
    hideAllOptions();
    basicOptions.forEach(option => {
        option.style.display = 'block';
    });
}

// Function to show all options (15)
function showAllOptions() {
    allOptions.forEach(option => {
        option.style.display = 'block';
    });
}

// Function to show only basic images
function showOnlyBasicImages() {
    console.log('Clicked LESS');
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
    showOnlyBasicOptions();
});

// "More" button shows options-grid (full list of 15 styles)
moreButton.addEventListener('click', function() {
    optionsContainer.style.display = 'none';
    optionsGrid.style.display = 'grid';
    showAllOptions();
});

const basicOptions = document.querySelectorAll('.basic-options');
const allOptions = document.querySelectorAll('.all-options');

// Default state (show basic at first if you want)
basicOptions.forEach(option => option.style.display = 'flex');

lessButton.addEventListener('click', () => {
    basicOptions.forEach(option => option.style.display = 'flex');
    allOptions.forEach(option => option.style.display = 'none');
});

moreButton.addEventListener('click', () => {
    basicOptions.forEach(option => option.style.display = 'none');
    allOptions.forEach(option => option.style.display = 'grid');
});

