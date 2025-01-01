import './global/style/style.css';
import { stickyHeader } from './global/stickyHeader.ts';
import updateAboutUsContainer from './aboutUsContainer/updateAboutUsContainer.ts';
import updatePetContainer from './petContainer/updatePetContainer.ts';
import generateImage from './global/generateImage.ts';

let currentIndex = 0;

function displayApp() {
  return (document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header></header>
     <main>
      <div id="" class="logo-div small-screen-nav-bar-icon main-logo-div">
       ${generateImage(`${'/assets/logo.png'}`, `${'logo de Midnight lucky charm'}`, `${'logo-img'}`)}
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
