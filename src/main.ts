import './style.css';
import { petArray, generatePetContainer } from './pet.ts';

let currentIndex = 0;

function updatePetContainer(index: number) {
  const pet = petArray[index];
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <h1>Adoptez-moi !</h1>
      ${generatePetContainer(pet)}
    </div>
  `;

  document.getElementById('right-arrow')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % petArray.length;
    updatePetContainer(currentIndex);
  });

  document.getElementById('left-arrow')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + petArray.length) % petArray.length;
    updatePetContainer(currentIndex);
  });
}

updatePetContainer(currentIndex);
