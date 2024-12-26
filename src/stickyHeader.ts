export function stickyHeader() {
  const app = document.querySelector<HTMLDivElement>('#app');
 const headerElement = document.getElementsByTagName('header')[0];

  if (app && headerElement) {
    return (headerElement.innerHTML = ` 
          <div class="logo-div">
            <img src="/assets/logo.png" class="logo-img">
          </div>
          <div class='nav-div'>
            <a href="#">Notre association</a>
          </div>
          <div class='nav-div'>
            <a href="pet-container">Nos animaux</a>
          </div>
          `);
  } else {
    console.error('Aucun élément <header> trouvé.');
  }
}
