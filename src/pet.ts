export interface Pet {
  id: string;
  imgSrc: string;
  imgAlt: string;
  name: string;
  breed: string;
  homeCountry: string;
  description: string;
}

export function generatePetContainer(pet: Pet) {
  return `
 <div class="card" id="card-${pet.id}">
      <img src="${pet.imgSrc}" alt="${pet.imgAlt}" class="pet-img" />
      <h2>${pet.name}</h2>
      <p>${pet.breed}</p>
      <p>${pet.homeCountry}</p>
      <p>${pet.description}</p>
      <div class="x">
        <button id="right arrow" type="button"></button>
        <button id="left arrow" type="button"></button>
      </div>
    </div>
`;
}

export const chat: Pet = {
  id: 'chat-roux',
  imgSrc: 'path/to/chat-image.jpg',
  imgAlt: "Image d'un chat",
  name: 'Boris',
  breed: 'Kurilian Bobtail',
  homeCountry: 'Russie',
  description: 'Un chat très mignon et joueur.',
};

export const chien: Pet = {
  id: 'chien',
  imgSrc: '/assets/chien.jpg',
  imgAlt: "Image d'un chien",
  name: 'Cooper',
  breed: 'Labrador',
  homeCountry: 'Canada',
  description: 'un chien qui aime jouer et courir.',
};