import { profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { footerOnDom, navbarOnDom, profileOnDom } from "../main.js";
import { repos } from "../../data/data.js";

// *********  OVERVIEW - Cards ********** //
const renderPinnedCards = () => {
  let domString = `<h5 style="color:white;"> Pinned </h5>`;
  repos
    .filter((repo) => repo.fave)
    .forEach((repo) => {
      domString += `<div class="card" style="width: 18rem; border-radius:%; border-color:grey; margin:0.5em">
  <div class="card-body">
    <h5 class="card-title"><span class="material-symbols-outlined">book</span> ${repo.name} </h5>
    <p class="card-text">${repo.description}</p>
    <p class="codebase">
    <svg height="15" width="15">
      <circle cx="6" cy="6" r="6" fill=${repo.codebaseColor}></circle>
    </svg>
    ${repo.codebase}
  </p>
  </div>
</div>`;
    });
  renderToDom("#pinned-repos", domString);
};

// *********  OVERVIEW - FORM ********** //
const pinnedRepoFormHTML = () => {
  const domString = `<form id="overview-form"><div class="mb-3">
  <h2 style="color:white;">Pin a Repository</h2>
  <p>Create a Pinned Repository</p>
  <hr>
  <label for="exampleFormControlInput1" class="form-label" style="color:white;">Repository Name</label>
  <input type="text" class="form-control" id="pinnedRepo" style="background-color:black;border-color:#6c6e72">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color:white;">Description</label>
  <textarea class="form-control" id="pinnedRepoDesc" rows="4" style="background-color:black;border-color:#6c6e72"></textarea>
  <hr>
  <button type="submit" class="btn btn-success">Pin It!</button>
  </div></form>`;
  renderToDom("#pinned-repo-form-container", domString);
};

// *********  OVERVIEW - Event Listeners ********** //
const eventListeners = () => {
  //Form Submission Event Listener
  document.querySelector("#overview-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newFave = {
      id: repos.length + 1,
      name: document.querySelector("#pinnedRepo").value,
      description: document.querySelector("#pinnedRepoDesc").value,
      fave: true,
    };
    repos.push(newFave);
    renderPinnedCards();
    document.querySelector("#overview-form").reset();
  });
};

// ********* OVERVIEW - START ********** //
const startOverview = () => {
  profileOnDom(profile);
  renderPinnedCards();
  pinnedRepoFormHTML();
  eventListeners();
  navbarOnDom();
  profileOnDom(profile);
  footerOnDom();  
}
startOverview();
