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
        <button id="left arrow" type="button" <i class="fa-solid fa-arrow-left"></i></button>
        <button id="right arrow" type="button" <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
`;
}

export const chat: Pet = {
  id: 'chat-roux',
  imgSrc: '/assets/chat.jpeg',
  imgAlt: "Image d'un chat",
  name: 'Boris',
  breed: 'Kurilian Bobtail',
  description: 'Je suis très mignon !',
};

export const chien: Pet = {
  id: 'chien',
  imgSrc: '/assets/chien.jpg',
  imgAlt: "Image d'un chien",
  name: 'Cooper',
  breed: 'Labrador',
  description: "J'aime jouer et courir.",
};
