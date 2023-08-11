import { fetchBreeds } from "./cat-api";
import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
  const refs = {
    selectField: document.querySelector(`.breed-select`),
};
new SlimSelect({
    select: refs.selectField
})

fetchBreeds().then((breeds) => {
    console.log(breeds);
  populateSelectWithBreeds(breeds);
});

function populateSelectWithBreeds(breeds) {
   const optionsMarkup = breeds.map(({ id, name }, index) =>
    `<option value="${id}">${name}</option>`
   ).join('');
    refs.selectField.insertAdjacentHTML(`afterbegin`, optionsMarkup);

}











