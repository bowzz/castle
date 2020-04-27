import { films } from '../data/films.js'
import { people } from '../data/people.js'

console.log("Welcome to the JS!")

console.log(document.querySelector('.heyo'))

let heyoDiv = document.querySelector('.heyo')

let castList = document.createElement("ul")

let counter = 1

people.forEach(person => {
    let nameItem = document.createElement("li")
    nameItem.textContent = person.name
    castList.appendChild(nameItem)

    let personAnchor = document.createElement("a")
    personAnchor.href = '#'
    let personImg = document.createElement("img")
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

    personImg.addEventListener('error', (event) => {
        personImg.hidden = true
       //personImg.src = '../images/uvu.jpg'  
    });
    
    personImg.addEventListener("click", function( event ) {
    console.log('thanks for clicking me')
    })
    personAnchor.appendChild(personImg)
    heyoDiv.appendChild(personAnchor)
    counter++
})

heyoDiv.appendChild(castList)