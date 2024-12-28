export function stickyHeader() {
  const app = document.querySelector<HTMLDivElement>('#app');
  const headerElement = document.getElementsByTagName('header')[0];

  if (app && headerElement) {
    return (headerElement.innerHTML = `
      <nav class="sticky-header">
        <div id="large-devices-logo" class="logo-div">
          <img src="/assets/logo.png" class="logo-img">
        </div>
        <ul>
          <li class='nav-div'>
            <a href="#">Notre association</a>
          </li>
          <li class='nav-div'>
            <a href="pet-container">Nos animaux</a>
          </li>
        </ul>
      </nav>
      `);
  } else {
    console.error('Aucun élément <header> trouvé.');
  }
}
