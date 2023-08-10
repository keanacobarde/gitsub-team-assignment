import { profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { profileOnDom } from "../main.js";
import { repos } from "../../data/data.js";

profileOnDom(profile)

// *********  OVERVIEW - Cards ********** //
const renderPinnedCards = () => {
  let domString = ``; 
repos.filter((repo) => repo.fave).forEach((repo) => {
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><span class="material-symbols-outlined">book</span> ${repo.name} </h5>
    <p class="card-text">${repo.description}</p>
  </div>
</div>`
})
renderToDom("#pinned-repos", domString); 
}
renderPinnedCards();

// *********  OVERVIEW - FORM ********** //
const pinnedRepoFormHTML = () => {
  const domString = `<div class="mb-3">
  <h2 style="color:white;">Pin Repository</h2>
  <p>Create a Pinned Repository</p>
  <hr>
  <label for="exampleFormControlInput1" class="form-label" style="color:white;">Repository Name</label>
  <input type="text" class="form-control" id="pinnedRepo" placeholder="Repository">
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style="color:white;">Description</label>
  <textarea class="form-control" id="pinnedRepoDesc" rows="4"></textarea>
  <hr>
  <button type="button" class="btn btn-success">Pin It!</button>
  </div>`
  renderToDom("#pinned-repo-form", domString);
}
pinnedRepoFormHTML(); 
