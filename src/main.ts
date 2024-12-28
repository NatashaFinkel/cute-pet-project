import './style.css';
import { stickyHeader } from './stickyHeader.ts';
import updatePetContainer from './updatePetContainer.ts';

let currentIndex = 0;

function displayApp() {
  return (document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header></header>
     <main>
      <div id="pet-container"></div>
     </main>
   `);
}

displayApp();
stickyHeader();
updatePetContainer(currentIndex);
