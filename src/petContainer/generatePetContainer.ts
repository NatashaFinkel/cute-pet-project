import { Pet } from '../global/interfaces/pet';
import generateImage from '../global/generateImage';
import getAnotherPetBtnBar from './getAnotherPetBtnBar';

export function generatePetContainer(pet: Pet) {
  return `
       <h2>Adoptez-moi !</h2>
      ${generateImage(`${pet.imgSrc}`, `${pet.imgAlt}`, 'pet-img')}
      <h3>${pet.name}</h3>
      <p class="breed">${pet.breed}</p>
      <p>${pet.description}</p>
      ${getAnotherPetBtnBar()}
    `;
}
