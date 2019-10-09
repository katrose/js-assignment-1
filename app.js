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

data.forEach(function(article) {
    // Create card div
    let newCard = document.createElement('div');
    newCard.className = 'card';

    // TOPIC -------------------------------------------
    // Declare topic variable
    let topic = document.createElement('p');
    // Set CSS class name
    topic.className = 'topic';
    // Set topic text
    let topicText = document.createTextNode(article.topic);
    topic.appendChild(topicText);
    // Add topic to div
    newCard.appendChild(topic);

    // TITLE -------------------------------------------
    let title = document.createElement('h2');
    title.className = 'title';
    let titleText = document.createTextNode(article.title);
    title.appendChild(titleText);
    newCard.appendChild(title);

    // PRICE BUTTON -----------------------------------
    let price = document.createElement('div');
    price.className = ('buy-button');
    let priceText = document.createTextNode("Read for " + article.price);
    price.appendChild(priceText);
    newCard.appendChild(price);

    // COLOR -------------------------------------------
    newCard.style.backgroundColor = article.color;

    // Append card to container
    document.querySelector('.card-row').appendChild(newCard);
})