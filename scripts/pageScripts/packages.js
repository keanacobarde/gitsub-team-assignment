import { packages, profile } from "../../data/data.js";
import { renderToDom } from "../../utility/renderToDom.js";
import { profileOnDom } from "../main.js";

export const packageOnDom = (array) => {
  let domString = "";
  for (const pack of array) {
    domString += `
  <div class="card" style="width: 18rem;">
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


export const packageFormOnDom = () => {
  let domString = "";
  domString += `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Create new package</label>
  <input type="text" class="form-control" id="package-form-name" placeholder="name">
</div>
<div class="mb-3">
  <label for="package-form-description" class="form-label">Description</label>
  <textarea class="form-control" id="package-form-description" rows="3"></textarea>
</div>
<input class="btn btn-primary" type="submit" value="Submit">
`;
renderToDom("#package-form",domString)
};

profileOnDom(profile)
packageOnDom(packages);
packageFormOnDom();
