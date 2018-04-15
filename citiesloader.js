
// Make sure DB is accessible
console.log(CitiesDatabase.northAmerica[0].name)

// Find document element, assign to variable
const cityRef = document.querySelector("#cityCards")

// Figure out how to print anything to DOM


// Create card title in H2
const cardTitle = document.createElement("h2")
cityRef.appendChild(cardTitle)
cardTitle.textContent = CitiesDatabase.northAmerica[0].name

// Create card image in img tag
const cardImage = document.createElement("img")
cityRef.appendChild(cardImage)
cardImage.setAttribute("width", "100%")
cardImage.setAttribute("src", CitiesDatabase.northAmerica[0].image)

// Create year visited
const cardYear = document.createElement("h3")
cityRef.appendChild(cardYear)
cardYear.textContent = CitiesDatabase.northAmerica[0].year_visited

// Create List of things to do
const cardList = document.createElement("ol")
CitiesDatabase.northAmerica[0].top_five_attractions.forEach( (thingToDo) => 
  console.log(thingToDo)  
)