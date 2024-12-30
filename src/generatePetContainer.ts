import { Pet } from './pet';
import getAnotherPetBtnBar from './getAnotherPetBtnBar';

export function generatePetContainer(pet: Pet) {
  return `
       <h2>Adoptez-moi !</h2>
        <img src="${pet.imgSrc}" alt="${pet.imgAlt}" class="pet-img" />
      <h3>${pet.name}</h3>
      <p class="breed">${pet.breed}</p>
      <p>${pet.description}</p>
      ${getAnotherPetBtnBar()}
    `;
}
