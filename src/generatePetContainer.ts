import { Pet } from './pet';

export function generatePetContainer(pet: Pet) {
  return `
       <h2>Adoptez-moi !</h2>
        <img src="${pet.imgSrc}" alt="${pet.imgAlt}" class="pet-img" />
      <h3>${pet.name}</h3>
      <p class="breed">${pet.breed}</p>
      <p>${pet.description}</p>
      <div class="button-div">
        <button id="left-arrow" type="button">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> 
        </button>
        <button id="surprise-button" type="button">
          <i class="fa-solid fa-question" aria-hidden="true"></i>
        </button>
        <button id="right-arrow" type="button">
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 
        </button>
      </div>
    `;
}
