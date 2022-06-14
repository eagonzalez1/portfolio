/*-------------------------------- Imports --------------------------------*/

import { previousWork } from "./previous-work.js"
const cardContainer = document.getElementById('card-container')

import { previousRoles } from "./previous-roles.js"
const rolesAccordion = document.getElementById('experience-accordion')

/*-------------------------------- Constants --------------------------------*/

let project =
{
  title: 'Tic Tac Toe',
  deployment: 'https://tic-tac-toe-80s.netlify.app/',
  image: '/assets/images/tic-tac-toe-screenshot.png',
  github: 'https://github.com/eagonzalez1/ttt-weekend',
  description: "An 80's themed Tic-Tac-Toe application demonstrating DOM manipulation and Javacript integration."
}

let role =
{
  title: "Detachment Officer-in-charge (Jul '20 / May '21)",
  responsibility: 'Led a 45 personnel / four-aircraft detachment deployed to the Horn of Africa to provide 24/7 emergency response support'
}

/*-------------------------------- Variables --------------------------------*/

let favTurn = 1

/*------------------------ Cached Element References ------------------------*/

const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")

const favicon = document.querySelector('#favicon')
const bitcoinPic = document.querySelector('.aboutMe-pictures')
const bitcoinBtn = document.querySelector('#bitcoin-button')

let mouseCursor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('button, a, .btn.btn-primary')
console.log(navLinks)

window.addEventListener('mousemove', cursor)

function cursor(evt) {
  mouseCursor.style.top = evt.pageY + 'px'
  mouseCursor.style.left = evt.pageX + 'px'
}

navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-over')
})
link.addEventListener('mouseover', () => {
  mouseCursor.classList.add('link-over')
})
})

/*----------------------------- Event Listeners -----------------------------*/

lightDarkBtn.addEventListener("click", toggleLightDark)
bitcoinBtn.addEventListener("click", changeFavicon)

/*-------------------------------- Functions --------------------------------*/

function changeFavicon () {
  if (favTurn === 1) {
    favicon.setAttribute('href', "./assets/images/bitcoin-favicon-small.png")
    bitcoinPic.setAttribute('src', "./assets/images/bitcoinConf-picture2.jpg")
    favTurn = favTurn * -1
  } else if (favTurn === -1) {
    favicon.setAttribute('href', "../assets/images/E-favicon.png")
    bitcoinPic.setAttribute('src', "./assets/images/bitcoinConf-picture.jpg")
    favTurn = favTurn * -1
  }
}



function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}

checkDarkPref()

let projectMarkup = previousWork.map(project =>
  `
  <div class="card text-center" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.title}</h5>
    <p class="card-text">${project.description}</p>
    <div>
      <a href="${project.github}" class="btn btn-primary">GitHub</a>
      <a href="${project.deployemnt}" class="btn btn-secondary">Deployment</a>
    </div>
  </div>
  </div>
  `).join('')

cardContainer.innerHTML = projectMarkup



let roleMarkup = previousRoles.map((role, index) =>
    `
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
        ${role.title}
        </button>
      </h2>
      <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        ${role.responsibility}
        </div>
      </div>
    </div>
    `).join('')

    rolesAccordion.innerHTML = roleMarkup




