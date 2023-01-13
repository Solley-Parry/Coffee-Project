"use strict"

function renderCoffee(coffee) {
    var html = '<div class="card coffee-card shadow-sm m-4 rounded col-3">';
    // html += '<div>' + coffee.id + '</div>';
    html += '<div class="card-body">' + '<h4 class="card-title">' + coffee.name + '</h4>';
    html += '<h5 class="card-text">' + coffee.roast + ' roast' + '</h5>';
    html += '</div>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        console.log(coffees[i])
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (roastSelection.value === "all") {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}





//SEARCH COFFEE INPUT*********************************

let coffeeSearch = document.querySelector("#search-coffee")
coffeeSearch.addEventListener("keyup", searchCoffees)


function searchCoffees() {
    let searchRoast = coffeeSearch.value.toUpperCase();
    let filteredCoffees = [];
    console.log(searchRoast);
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    });
//end SEARCH COFFEE INPUT*********************************


//    UTILIZE RENDER COFFEES TO CREATE THE HTML FOR THE NEW COFFEE LIST
//    SELECT TABLE BODY TO SET THE INNER HTML TO HTE OUTPUT FROM RENDERED COFFEES
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Silencer Smooth', roast: 'light'},
    {id: 2, name: 'Space Bear', roast: 'light'},
    {id: 3, name: 'Gunship', roast: 'light'},
    {id: 4, name: 'AK-47 Espresso', roast: 'medium'},
    {id: 5, name: 'Cowabunga Send It', roast: 'medium'},
    {id: 6, name: 'Freedom', roast: 'medium'},
    {id: 7, name: 'Beyond Black', roast: 'dark'},
    {id: 8, name: 'Tacti-Squatch ', roast: 'dark'},
    {id: 9, name: 'Murdered Out', roast: 'dark'},
    {id: 10, name: 'Dirt Nap', roast: 'dark'},
    {id: 11, name: 'Blackbeards Delight', roast: 'dark'},
    {id: 12, name: 'Devil Dog', roast: 'dark'},
    {id: 13, name: 'Teufel Hunden', roast: 'dark'},
    {id: 14, name: '7th Group Yeet Dust', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
