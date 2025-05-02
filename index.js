const bank = [];
const even = [];
const odd = [];

function addNumber(number) {
  bank.push(number);

  render();
}

function oddsAndEvens() {
  if (bank[0] % 2 === 0) {
    even.push(bank[0]);
    bank.shift();
  } else {
    odd.push(bank[0]);
    bank.shift();
  }
  render();
}
function BankForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label> 
    Add a number to the bank: 
    <input name="bank" type="number" min="1" />
    </label>
    <button>Add Number</button>  
    `;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = document.querySelector("input[name='bank']").value;
    addNumber(Number(value));
  });

  return $form;
}

function BankSection() {
  const $bankSection = document.createElement("section");
  $bankSection.classList.add("bank");
  $bankSection.innerHTML = `
<h2>Bank</h2>
<div id="bank" class="bank-input">${bank.join(" - ")}</div>
<h2>Odds</h2>
<div id="odd" class="bank-input">${odd.join(" - ")}</div>
<h2>Evens</h2>
<div id="even" class="bank-input">${even.join(" - ")}</div> `;

  return $bankSection;
}
function ControlPanel() {
  const $controlPanel = document.createElement("div");
  $controlPanel.classList.add("control-panel");
  $controlPanel.innerHTML = `
    <button id="sort-1">Sort 1</button>
    <button id="sort-all">Sort All</button>`;

  $controlPanel.querySelector("#sort-1").addEventListener("click", () => {
    oddsAndEvens();
  });
  $controlPanel.querySelector("#sort-all").addEventListener("click", () => {
    while (bank.length > 0) {
      oddsAndEvens();
    }
  });

  return $controlPanel;
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <header>
    <h1>Odd or Even</h1>
<div class="bank-form">
    <BankForm></BankForm>
    <ControlPanel></ControlPanel>
</div>    
  </header>   
    <main> 
    <BankSection></BankSection>
    </main> 
    `;
  $app.querySelector("BankForm").replaceWith(BankForm());
  $app.querySelector("ControlPanel").replaceWith(ControlPanel());
  $app.querySelector("BankSection").replaceWith(BankSection());
}

render();
