import { packages, profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { profileOnDom } from "../main.js";

export const packageOnDom = (array) => {
  let domString = "";
  for (const pack of array) {
    domString += `
  <div id="package-card" class="card" style="width: 18rem;">
    <img src="${pack.icon}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pack.name}</h5>
      <p class="card-text">${pack.description}</p>
      <a href="#" class="btn btn-primary">Learn more...</a>
    </div>
  </div>
`;
  }
  renderToDom("#package-container", domString);
};
packageOnDom(packages)

export const packageFormOnDom = () => {
  let domString = "";
  domString += `
  <form id="package-form">

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Package name</label>
      <input type="text" class="form-control" id="package-name-input" placeholder="Enter name here">
    </div>

    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
      <textarea class="form-control" id="package-description-input" placeholder="Write a short description here" rows="3"></textarea>
    </div>

    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Icon</label>
      <input type="url" class="form-control" id="package-icon-input" placeholder="Image url">
    </div>
   
    <input class="form-control form-control-sm" type="text" placeholder="Tags" aria-label=".form-control-sm example">

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>

  </form>
`;
  renderToDom("#package-form-container", domString);
};
packageFormOnDom()

const packageForm = document.getElementById("package-form")

packageForm.addEventListener('submit',(e) => {
  e.preventDefault()  

    const newPackage = {
      id: packages.length +1,
      icon: document.getElementById('package-icon-input').value,
      name: document.getElementById('package-name-input').value,
      description: document.getElementById('package-description-input').value,
    };

    packages.push(newPackage)
    packageOnDom(packages)
    packageForm.reset()
  }
  )
 profileOnDom(profile)
