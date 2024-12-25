import './style.css';
import { chien, chat, generatePetContainer } from './pet.ts';

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Adoptez-moi !</h1>
    ${generatePetContainer(chien)}
  </div>
`;

console.log(chat);
