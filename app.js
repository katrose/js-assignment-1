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
displayCards(data);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
FUNCTION DEFINITIONS
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/**
 * Takes an array of objects and outputs them as <div> elements in the DOM.
 * @param {object} elementArray An array of objects representing articles.
 */
function displayCards(elementArray) {

    elementArray.forEach(function(article) {

        // Create card div
        const newCard = document.createElement('div');
        newCard.className = 'card';
    
        // Loop through key/value pairs in each object in the DATA array
        for (var key in article) {
            populateCard(key, article[key], newCard);
        }
    
        // Set color
        newCard.style.backgroundColor = article.color;
    
        // Append card to container
        document.querySelector('.card-row').appendChild(newCard);
    })

}

/**
 * Creates an HTML element using the data in an object, and appends the HTML element to its parent container.
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