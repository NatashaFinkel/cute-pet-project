import './style.css';
import { stickyHeader } from './stickyHeader.ts';
import updateAboutUsContainer from './updateAboutUsContainer.ts';
import updatePetContainer from './updatePetContainer.ts';

let currentIndex = 0;

function displayApp() {
  return (document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header></header>
     <main>
       <h1>Midnight lucky charm</h1>
     <div class="container" id="about-us-container"></div>
      <div class="container card" id="pet-container"></div>
     </main>
   `);
}

displayApp();
stickyHeader();
updateAboutUsContainer();
updatePetContainer(currentIndex);
