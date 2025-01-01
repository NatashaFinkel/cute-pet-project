import generateImage from './generateImage';

export function stickyHeader() {
  const app = document.querySelector<HTMLDivElement>('#app');
  const headerElement = document.getElementsByTagName('header')[0];

  if (app && headerElement) {
    return (headerElement.innerHTML = `
      <nav class="sticky-header">
        <div id="large-devices-logo" class="logo-div large-screen-nav-bar-icon">
          ${generateImage(`${'/assets/logo.png'}`, `${'logo de Midnight lucky charm'}`, 'logo-img')}
        </div>
        <ul>
          <li class='nav-div'>
            <a href="#about-us-container" aria-label="lien vers about-us-container" class="large-screen-nav-bar-icon">Notre association</a>
            <a href="#about-us-container" aria-label="icône du lien vers about-us-container">
              <i class="fa-solid fa-house small-screen-nav-bar-icon"></i>
            </a>
          </li>
          <li class='nav-div'>
            <a href="#pet-container" class="large-screen-nav-bar-icon">Nos animaux</a>
            <a href="#pet-container" aria-label="icône du lien vers pet-container">
            <i class="fa-solid fa-paw small-screen-nav-bar-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
      `);
  } else {
    console.error('Aucun élément <header> trouvé.');
  }
}
