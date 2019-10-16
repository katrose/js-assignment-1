const green = 'rgba(118, 174, 170, 1)'
const black = 'rgba(23, 35, 50, 1)'
const brown = 'rgba(205, 164, 133, 1)'
const greenblue = 'rgba(62, 171, 201, 1)'
const pink = 'rgba(254, 156, 161, 1)'
const blue = 'rgba(98, 189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
"MAIN" FUNCTION: Display cards on the page
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
const container = document.querySelector('.card-row');
displayCards(data, container);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
FUNCTION DEFINITIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/**
 * Takes an array of objects and outputs them as <div> elements inside its parent container.
 * @param {object} elementArray An array of objects representing articles.
 * @param {object} parentDiv The DOM container that will contain the <div> elements generated in this function.
 */
function displayCards(elementArray, parentDiv) {

    elementArray.forEach(function(article) {

        // 1. Create card div
        const newCard = document.createElement('div');
        newCard.className = 'card';
    
        // 2. Loop through key/value pairs in each object in the data array and use these as content for card div
        for (var key in article) {
            populateCard(key, article[key], newCard);
        }
    
        // 3. Set color of card div
        newCard.style.backgroundColor = article.color;
    
        // 4. Append card to parent container
        parentDiv.appendChild(newCard);
    })
}

/**
 * Helper function that creates an HTML element with values from an object, and appends the HTML element to its parent container.
 * @param {string} elementType A string that represents current object key.
 * @param {string} content A string that represents value associated with current object key.
 * @param {object} parentDiv An object that represents the "card" DOM element that will contain the key/value pairs.
 */
function populateCard(elementType, content, parentDiv) {

    // Create an HTML element for all key/value pairs in object except for color
    if (elementType != 'color') {

        const htmlTag     = getHtmlTag(elementType);
        const cssClass    = getCssClassName(elementType);
        const textContent = getContent(elementType, content);

        // Create the HTML element
        const cardElement = document.createElement(htmlTag);

        // Set the class of the element
        cardElement.className = cssClass;

        // Set content of element
        cardElement.appendChild(document.createTextNode(textContent));

        // Append to parent
        parentDiv.appendChild(cardElement);

        return cardElement;
    }
}

/**
 * Helper function that converts an object key to an HTML tag string.
 * @param {string} elementType A string that represents current object key.
 */
function getHtmlTag(elementType) {

    if (elementType == 'topic') {
        return 'p';
    }
    else if (elementType == 'title') {
        return 'h2';
    }
    else if (elementType == 'price') {
        return 'div';
    }
}

/**
 * Helper function that converts an object key to a CSS class string.
 * @param {string} elementType A string that represents current object key.
 */
function getCssClassName(elementType) {

    if (elementType == 'topic') {
        return 'topic';
    }
    else if (elementType == 'title') {
        return 'title';
    }
    else if (elementType == 'price') {
        return 'buy-button';
    }
}

/**
 * Helper function that returns proper formatting for a string if it is a price string for the Buy button.
 * @param {string} elementType A string that represents current object key.
 * @param {string} content A string that represents value of current object key.
 */
function getContent(elementType, content) {

    if (elementType == 'price') {
        return "Read for " + content;
    }
    else {
        return content;
    }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
SORT FUNCTIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/**
 * Alphabetically sorts objects in an array using the 'topic' values
 * @param {object} articleArray Array of article objects.
 */
function sortByName(articleArray) {

    articleArray.sort(function(a, b) {
        if (a.topic < b.topic) {
            return -1;
        }
        else {
            return 1;
        }
    })

}

/**
 * Sorts objects in an array in increasing order using the 'price' values
 * @param {object} articleArray Array of article objects.
 */
function sortByPrice(articleArray) {

    articleArray.sort(function(a, b) {

        // Convert price strings to integers
        let numA = Number(a.price.substr(1));
        let numB = Number(b.price.substr(1));

        if (numA < numB) {
            return -1;
        }
        else {
            return 1;
        }
    })
}

// -----------------------------------------------------
// EVENT HANDLERS
// -----------------------------------------------------

// SORT BY NAME
document.querySelector('.sort-button-name').addEventListener('click', function() {

    // 1. Clear container div
    container.innerHTML = "";

    // 2. Sort data array
    sortByName(data);

    // 3. Re-display newly sorted array in the container div
    displayCards(data, container);
})

// SORT BY PRICE
document.querySelector('.sort-button-price').addEventListener('click', function() {
    container.innerHTML = "";
    sortByPrice(data);
    displayCards(data, container);
})