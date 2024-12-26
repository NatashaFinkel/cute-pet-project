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
      <button id="surprise-button" type="button">
        <i class="fa-solid fa-question" aria-hidden="true"></i>
      </button>
      <button id="right-arrow" type="button">
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 
      </button>
    </div>
  </div>
  `;
}

export const petArray: Pet[] = [
  {
    id: 'chat',
    imgSrc: '/assets/chat.jpg',
    imgAlt: "Image d'un chat",
    name: 'Titi',
    breed: 'chat',
    description: 'Tellement mignon !',
  },
  {
    id: 'chien',
    imgSrc: '/assets/chien.jpg',
    imgAlt: "Image d'un chien",
    name: 'Cooper',
    breed: 'Labrador',
    description: "J'aime jouer et courir.",
  },
  {
    id: 'tortue',
    imgSrc: '/assets/tortue.jpg',
    imgAlt: "Image d'une tortue",
    name: 'Caroline',
    breed: 'Tortue des Galapagos',
    description: 'Lentenement mais sûrement.',
  },
  {
    id: 'hamster',
    imgSrc: '/assets/hamster.jpg',
    imgAlt: "Image d'un hamster",
    name: 'Galilée',
    breed: 'Hamster doré',
    description: 'Je suis très malicieux !',
  },
  {
    id: 'lapin',
    imgSrc: '/assets/lapin.jpg',
    imgAlt: "Image d'un lapin",
    name: 'Fluffy',
    breed: 'Lapin nain',
    description: 'Je suis tout doux !',
  },
  {
    id: 'hérisson',
    imgSrc: '/assets/herisson.jpeg',
    imgAlt: "Image d'un hérisson",
    name: 'Sonic',
    breed: 'Hérisson',
    description: 'Je suis très rapide !',
  },

  {
    id: 'poisson rouge',
    imgSrc: '/assets/poisson-rouge.jpg',
    imgAlt: "Image d'un poisson rouge",
    name: 'Titan',
    breed: 'Poisson rouge',
    description: "J'y pense et puis j'oublie !",
  },
  {
    id: 'poisson jaune',
    imgSrc: '/assets/poisson-jaune.jpg',
    imgAlt: "Image d'un poisson jaune",
    name: 'GoldieLocks',
    breed: 'Poisson jaune',
    description: 'Pourquoi je ne gagne jamais à cache-cache ?',
  },

  {
    id: 'perroquet',
    imgSrc: '/assets/perroquet.jpg',
    imgAlt: "Image d'un perroquet",
    name: 'Polly',
    breed: 'Perroquet',
    description: 'Je répète tout ce que vous dites !',
  },

  {
    id: 'poule',
    imgSrc: '/assets/poule.jpg',
    imgAlt: "Image d'une poule",
    name: 'Cocotte',
    breed: 'Poule',
    description: 'Je ponds des oeufs en chocolat !',
  },
  {
    id: 'chèvre',
    imgSrc: '/assets/chevre.jpg',
    imgAlt: "Image d'une chèvre",
    name: 'Biquette',
    breed: 'Chèvre',
    description: 'Je suis la reine de la montagne !',
  }
];
