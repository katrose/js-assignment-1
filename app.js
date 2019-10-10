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


/** 
 *  "MAIN" FUNCTION -- Display page with given data array
 */ 

displayCards(data);

// -----------------------------------------------------
// FUNCTION DEFINITIONS
// -----------------------------------------------------

function displayCards(elementArray) {

    elementArray.forEach(function(article) {

        // Create card div
        const newCard = document.createElement('div');
        newCard.className = 'card';
    
        // Loop through key/value pairs in each object in the DATA array and create a card div for each object
        for (var key in article) {
            populateCard(key, article[key], newCard);
        }
    
        // Set color of card div
        newCard.style.backgroundColor = article.color;
    
        // Append card to container
        document.querySelector('.card-row').appendChild(newCard);
    })
}

/** 
 * populateCard() -- creates an HTML object with an object key (elementType) for the HTML tag, the key's associated value (content) as content, and * appends it to a container (parentDiv).
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
 * getHtmlTag() -- Takes a key from object and "converts" it to appropriate HTML tag
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
 * getCssClassName() -- Takes a key from object and "converts" it to appropriate CSS class name as defined in stylesheet
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
 * getContent() -- Checks if element type is 'price' and if true, returns a concatenated string
 */
function getContent(elementType, content) {

    if (elementType == 'price') {
        return "Read for " + content;
    }
    else {
        return content;
    }
}

// SORT FUNCTIONS
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
document.querySelector('.sort-button-name').onclick = function() {
    document.querySelector('.card-row').innerHTML = "";
    sortByName(data);
    displayCards(data);
}

// SORT BY PRICE
document.querySelector('.sort-button-price').onclick = function() {
    document.querySelector('.card-row').innerHTML = "";
    sortByPrice(data);
    displayCards(data);
}
