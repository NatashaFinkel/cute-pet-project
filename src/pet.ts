export interface Pet {
  id: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  breed: string;
  description: string;
}

export function generatePetContainer(pet: Pet) {
  return `
  <div class="card" id="card-${pet.id}">
      <img src="${pet.imgSrc}" alt="${pet.imgAlt}" class="pet-img" />
    <h2>${pet.name}</h2>
    <p class="breed">${pet.breed}</p>
    <p>${pet.description}</p>
    <div class="button-div">
      <button id="left-arrow" type="button">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> 
      </button>
      <button id="right-arrow" type="button">
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 
      </button>
    </div>
  </div>
  `;
}

export const chat: Pet = {
  id: 'chat',
  imgSrc: '/assets/chat.jpg',
  imgAlt: "Image d\'un chat",
  name: 'Titi',
  breed: 'chat',
  description: 'Tellement mignon !',
};

export const chien: Pet = {
  id: 'chien',
  imgSrc: '/assets/chien.jpg',
  imgAlt: "Image d\'un chien",
  name: 'Cooper',
  breed: 'Labrador',
  description: "J'aime jouer et courir.",
};

export const tortue: Pet = {
  id: 'tortue',
  imgSrc: '/assets/tortue.jpg',
  imgAlt: 'Image d\'une tortue',
  name: 'Caroline',
  breed: 'Tortue des Galapagos',
  description: 'Lentenement mais sûrement.',
};

export const hamster: Pet = {
  id: 'hamster',
  imgSrc: '/assets/hamster.jpg',
  imgAlt: "Image d\'un hamster",
  name: 'Galilée',
  breed: 'Hamster doré',
  description: 'Je suis très malicieux !',
};

export const lapin: Pet = {
  id: 'lapin',
  imgSrc: '/assets/lapin.jpg',
  imgAlt: "Image d\'un lapin",
  name: 'Fluffy',
  breed: 'Lapin nain',
  description: 'Je suis tout doux !',
};

export const petArray: Pet[] = [chat, chien, tortue, hamster, lapin];
