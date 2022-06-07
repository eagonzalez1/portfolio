

import { previousWork } from "./previous-work.js"
const cardContainer = document.getElementById('card-container')


/*-------------------------------- Constants --------------------------------*/

let project =
  {
    title: 'Tic Tac Toe',
    deployment: 'https://tic-tac-toe-80s.netlify.app/',
    image: '/assets/images/tic-tac-toe-screenshot.png',
    github: 'https://github.com/eagonzalez1/ttt-weekend',
    description: "An 80's themed Tic-Tac-Toe application demonstrating DOM manipulation and Javacript integration."
  }



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

console.log(projectMarkup)
cardContainer.innerHTML = projectMarkup

/*-------------------------------- Variables --------------------------------*/




/*------------------------ Cached Element References ------------------------*/




/*----------------------------- Event Listeners -----------------------------*/




/*-------------------------------- Functions --------------------------------*/







