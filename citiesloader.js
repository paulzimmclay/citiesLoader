
// Make sure DB is accessible
console.log(CitiesDatabase.northAmerica[0].name)

// Find document element, assign to variable
const cityRef = document.querySelector("#cityCards")

// Figure out how to print anything to DOM


// Create card title in H2
const cardTitle = document.createElement("h2")
const titleContent = document.createTextNode(CitiesDatabase.northAmerica[0].name)
cardTitle.appendChild(titleContent)
cityRef.appendChild(cardTitle)
// Create card image in img tag
const cardImage = document.createElement("img")

cityRef.appendChild(cardImage)