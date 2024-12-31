(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function l(i,n,r){let a=typeof window<"u"?window.location.origin:"http://localhost:5173",e;return a==="https://natashafinkel.github.io"?e=`${a}/cute-pet-project/${i}`:e=`${a}/cute-pet-project${i}`,`
 <img src="${e}" alt="${n}" class="${r}">
  `}function u(){const i=document.querySelector("#app"),n=document.getElementsByTagName("header")[0];if(i&&n)return n.innerHTML=`
      <nav class="sticky-header">
        <div id="large-devices-logo" class="logo-div large-screen-nav-bar-icon">
          ${l("/assets/logo.png","logo","logo-img")}
        </div>
        <ul>
          <li class='nav-div'>
            <a href="#about-us-container" class="large-screen-nav-bar-icon">Notre association</a>
            <a href="#about-us-container">
              <i class="fa-solid fa-house small-screen-nav-bar-icon"></i>
            </a>
          </li>
          <li class='nav-div'>
            <a href="#pet-container" class="large-screen-nav-bar-icon">Nos animaux</a>
            <a href="#pet-container">
            <i class="fa-solid fa-paw small-screen-nav-bar-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
      `;console.error("Aucun élément <header> trouvé.")}function m(){return`
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
    `}function g(){document.getElementById("about-us-container").innerHTML=`
    ${m()} 
`}const s=[{imgSrc:"/assets/chat.jpg",imgAlt:"Image d'un chat de gouttière",name:"Titi",breed:"chat de gouttière",description:"Tellement mignon !"},{imgSrc:"/assets/chat-siamois.jpg",imgAlt:"Image d'un chat siamois",name:"Mia",breed:"Chat siamois",description:"On m'appelle jolis yeux."},{imgSrc:"/assets/chien.jpg",imgAlt:"Image d'un labrador",name:"Cooper",breed:"Labrador",description:"J'aime jouer et courir."},{imgSrc:"/assets/dalmatien.jpg",imgAlt:"Image d'un dalmatien",name:"Dotty",breed:"Dalmatien",description:"101 raisons de m'adopter !"},{imgSrc:"/assets/tortue.jpg",imgAlt:"Image d'une tortue",name:"Caroline",breed:"Tortue des Galapagos",description:"Lentement mais sûrement."},{imgSrc:"/assets/hamster.jpg",imgAlt:"Image d'un hamster",name:"Galilée",breed:"Hamster doré",description:"Je suis très malicieux !"},{imgSrc:"/assets/lapin.jpg",imgAlt:"Image d'un lapin",name:"Fluffy",breed:"Lapin nain",description:"Je suis tout doux !"},{imgSrc:"/assets/herisson.jpeg",imgAlt:"Image d'un hérisson",name:"Sonic",breed:"Hérisson",description:"Je suis très rapide."},{imgSrc:"/assets/poisson-rouge.jpg",imgAlt:"Image d'un poisson rouge",name:"Titan",breed:"Poisson rouge",description:"J'y pense, et puis j'oublie !"},{imgSrc:"/assets/poisson-jaune.jpg",imgAlt:"Image d'un poisson jaune",name:"GoldieLocks",breed:"Poisson jaune",description:"Je ne gagne jamais à cache-cache."},{imgSrc:"/assets/perroquet.jpg",imgAlt:"Image d'un perroquet",name:"Polly",breed:"Perroquet",description:"Je répète tout ce que vous dites !"},{imgSrc:"/assets/poule.jpg",imgAlt:"Image d'une poule",name:"Cocotte",breed:"Poule",description:"Je ponds des oeufs en chocolat !"},{imgSrc:"/assets/chevre.jpg",imgAlt:"Image d'une chèvre",name:"Biquette",breed:"Chèvre",description:"Je suis la reine de la montagne !"},{imgSrc:"/assets/zebre.jpg",imgAlt:"Image d'un zèbre",name:"Zozo",breed:"Zèbre",description:"Ze zozotte un peu..."},{imgSrc:"/assets/girafe.jpg",imgAlt:"Image d'une girafe",name:"Ruby",breed:"Girafe",description:"Utile pour espionner vos voisins !"},{imgSrc:"/assets/taupe.jpg",imgAlt:"Image d'une taupe",name:"Todd",breed:"Taupe",description:"Déjà 854 tunnels à mon actif !"}];function p(){return`
      <div class="button-div">
        <button id="left-arrow" type="button" data-testid="left-arrow">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> 
        </button>
        <button id="surprise-button" type="button">
          <i class="fa-solid fa-question" aria-hidden="true"></i>
        </button>
        <button id="right-arrow" type="button">
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 
        </button>
      </div>
    `}function f(i){return`
       <h2>Adoptez-moi !</h2>
      ${l(`${i.imgSrc}`,`${i.imgAlt}`,"pet-img")}
      <h3>${i.name}</h3>
      <p class="breed">${i.breed}</p>
      <p>${i.description}</p>
      ${p()}
    `}let o=0;function d(i){var a;const n=s[i];document.getElementById("pet-container").innerHTML=`
    ${f(n)}
  `;function r(e,t){var c;(c=document.getElementById(e))==null||c.addEventListener("click",()=>{o=(o+t+s.length)%s.length,d(o)})}r("right-arrow",1),r("left-arrow",-1),(a=document.getElementById("surprise-button"))==null||a.addEventListener("click",()=>{let e;do e=Math.floor(Math.random()*s.length);while(e===o||e===(o+1)%s.length||e===(o-1+s.length)%s.length);o=e,d(o)})}let h=0;function v(){return document.querySelector("#app").innerHTML=`
    <header></header>
     <main>
      <div id="" class="logo-div small-screen-nav-bar-icon main-logo-div">
       ${l("/assets/logo.png","logo","logo-img")}
        </div>
     <div class="container" id="about-us-container"></div>
      <div class="container card" id="pet-container"></div>
     </main>
   `}v();u();g();d(h);
