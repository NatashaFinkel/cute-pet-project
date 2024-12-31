import './style.css';
import { stickyHeader } from './stickyHeader.ts';
import updateAboutUsContainer from './updateAboutUsContainer.ts';
import updatePetContainer from './updatePetContainer.ts';
import generateImage from './generateImage.ts';

let currentIndex = 0;

function displayApp() {
  return (document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header></header>
     <main>
      <div id="" class="logo-div small-screen-nav-bar-icon main-logo-div">
       ${generateImage(`${'/assets/logo.png'}`, `${'logo'}`, `${'logo-img'}`)}
        </div>
     <div class="container" id="about-us-container"></div>
      <div class="container card" id="pet-container"></div>
     </main>
   `);
}

displayApp();
stickyHeader();
updateAboutUsContainer();
updatePetContainer(currentIndex);
