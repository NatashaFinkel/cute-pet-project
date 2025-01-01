export function generateAboutUsContainer() {
  return `
    <div class="about-us-container-logo-div">
      <h1>Midnight lucky charm</h1>
    </div>
    <h2>Notre association</h2>
      <div class="about-us-intro">
       <p>Chaque jour, nous recueillons des animaux abandonnés, malades ou maltraités.<br>Nous organisons également des campagnes de sensibilisation et d'éducation pour promouvoir les bonnes pratiques.</p>
       <p>Rejoignez-nous dans la lutte contre la maltraitance animale !</p>
      </div>
      <div class="actions-div">
        <h3>Nos actions</h3>
        <div class="icons-container">
        <div class="icon-div icon-1">
       <i class="fa-solid fa-dove icon"></i>
       <p>Sauvetage</p>
        </div>
        <div class="icon-div icon-2">
          <i class="fa-solid fa-suitcase-medical icon"></i>
          <p>Soins</p>
        </div>
        <div class="icon-div icon-3">
        <i class="fa-solid fa-people-roof icon"></i>
        <p>Adoption</p>
        </div>
        <div class="icon-div icon-5">
        <i class="fa-solid fa-graduation-cap icon"></i>
        <p>Education</p>
        </div>
      </div>
    `;
}
