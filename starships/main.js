import { starships } from '..data/starships.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        let shipAnchor = document.createElement('a')
        let listItem = document.createElement('li')
        listItem.textContent = starship.name

        shipAnchor.appendChild(listItem)
        navList.appendChild(shipAnchor)

})
nav.appendChild(navList)
}

populateNav(starships)


