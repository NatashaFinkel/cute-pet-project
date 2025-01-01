import { generateAboutUsContainer } from './generateAboutUsContainer';

export default function updateAboutUsContainer() {
  document.getElementById('about-us-container')!.innerHTML = `
    ${generateAboutUsContainer()} 
`;
}
