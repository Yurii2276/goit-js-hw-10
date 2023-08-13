import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import './styles.css';
  
const refs = {
    selectField: document.querySelector(`.breed-select`),
};

fetchBreeds().then((breeds) => {
    console.log(`array of POROD`, breeds);
  populateSelectWithBreeds(breeds);
});

refs.selectField.addEventListener('change', showCardCat);
    




function populateSelectWithBreeds(breeds) {
   const optionsMarkup = breeds.map(({ id, name }, index) =>
    `<option value="${id}">${name}</option>`
   ).join('');
    refs.selectField.insertAdjacentHTML(`afterbegin`, optionsMarkup);
    new SlimSelect({
        select: refs.selectField })  
};

function showCardCat(event) {
        event.preventDefault();
        const selectedBreedId = event.target.value;

        console.log(`Selected value: ${selectedBreedId}`);
    
    fetchCatByBreed(selectedBreed).then((catData) => {
    console.log(`PORODA`, catData);
  
});;

};










