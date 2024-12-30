
export default function getAnotherPetBtnBar() {
  return `
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
    `;
}
