import { films } from '../data/films.js'
import { people } from '../data/people.js'

console.log("Welcome to the JS!")

console.log(document.querySelector('.heyo'))

let heyoDiv = document.querySelector('.heyo')

heyoDiv.textContent = "Star Wars Cast" 

let castList = document.createElement("ul")

let counter = 1

people.forEach(person => {
    let nameItem = document.createElement("li")
    nameItem.textContent = person.name
    castList.appendChild(nameItem)
    let personImg = document.createElement("img")
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    heyoDiv.appendChild(personImg)
    counter++
})

heyoDiv.appendChild(castList)