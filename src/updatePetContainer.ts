import { petArray } from './pet.ts';
import { generatePetContainer } from './generatePetContainer.ts';
let currentIndex = 0;

export default function updatePetContainer(index: number) {
  const pet = petArray[index];
  document.getElementById('pet-container')!.innerHTML = `
    ${generatePetContainer(pet)}
  `;

  function addArrowClickListener(arrowId: string, direction: number) {
    document.getElementById(arrowId)?.addEventListener('click', () => {
      currentIndex =
        (currentIndex + direction + petArray.length) % petArray.length;
      updatePetContainer(currentIndex);
    });
  }
  addArrowClickListener('right-arrow', 1);
  addArrowClickListener('left-arrow', -1);

  document.getElementById('surprise-button')?.addEventListener('click', () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * petArray.length);
      //  Ici,  while crée une boucle qui continue de générer aléatoirement newIndex tant que newIndex === currentIndex, ou si newIndex est l'index qui est juste avant ou juste après currentIndex.
    } while (
      newIndex === currentIndex ||
      newIndex === (currentIndex + 1) % petArray.length ||
      newIndex === (currentIndex - 1 + petArray.length) % petArray.length
    );

    currentIndex = newIndex;
    updatePetContainer(currentIndex);
  });
}
