export default function getAnotherPetBtnBar() {
  return `
      <div class="button-div">
        <button id="left-arrow" type="button" data-testid="left-arrow">
        <button id="left-arrow" type="button" aria-label="get the previous pet button">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> 
        </button>
        <button id="surprise-button" type="button" aria-label="get a random pet button">
          <i class="fa-solid fa-question" aria-hidden="true"></i>
        </button>
        <button id="right-arrow" type="button" aria-label="get the next pet button">
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i> 
        </button>
      </div>
    `;
}
