const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

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

// Instructions
// Take the data above and display it as tiles on the page

// Loop through objects in the DATA array
data.forEach(function(article) {

    // Create card div
    let newCard = document.createElement('div');
    newCard.className = 'card';

    // Loop through key/value pairs in each object in the DATA array
    for (var key in article) {
        // Create HTML element for each key/value pair
        let newElement = createCardElement(key, article[key], newCard);
    }

    // Set color
    newCard.style.backgroundColor = article.color;

    // Append card to container
    document.querySelector('.card-row').appendChild(newCard);
})

// -----------------------------------------------------
// HELPER FUNCTIONS
// -----------------------------------------------------

// createCardElement() -- takes an object key (elementType), its associated value (content), creates an HTML element accordingly, and appends it to a container (parentDiv)
function createCardElement(elementType, content, parentDiv) {

    // Create an HTML element for all key/value pairs in object except for color
    if (elementType != 'color') {

        // Create the HTML element
        let cardElement = document.createElement(getHtmlTag(elementType));

        // Set the class of the element
        cardElement.className = getCssClassName(elementType);

        // Set content of element
        if (elementType == 'price') {
            cardElement.appendChild(document.createTextNode("Read for " + content));
        }
        else {
            cardElement.appendChild(document.createTextNode(content));
        }

        // Append to parent
        parentDiv.appendChild(cardElement);
    }
}

// FUNCTION: GET HTML TAG -- Takes a key from object and "converts" it to appropriate HTML tag
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

// FUNCTION: GET HTML TAG -- Takes a key from object and "converts" it to appropriate CSS class name as defined in stylesheet
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