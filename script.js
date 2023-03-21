const confirmClick = document.querySelector('.confirm-div');

// card holder input name
const cardHolder = document.querySelector('.name-input');
const userName = document.querySelector('.user-name');
const wrongName = document.getElementById('wrong-letter')

// card holder number
const cardNumber = document.getElementById('numberinput');
const cardNums = document.querySelector('.front-numbers');
const wrongNumbersFunc = document.getElementById('wrong-numbers');

// card month
const month = document.getElementById('month');
const monthYear = document.querySelector('.date');
const wrongMonthValue = document.getElementById('cant-blank');


// card year
const year = document.getElementById('year');
const yearMonth = document.querySelector('.date1');
const wrongYearValue = document.getElementById('cant-blank1');

// cvc code
const cvc = document.getElementById('cv');
const cvcBack = document.querySelector('.back-numbers');
const wrongCv = document.getElementById('cant-blank2');

// input container
const personContainer = document.getElementById('section-id');
const personResult = document.getElementById('footer-id');

// continue
const continue2 = document.querySelector('.continue-div');

// input regex
const regName = /^([A-Z][a-z]+)+\s([A-Z][a-z]+)+$/;
const regCvc = /^\d{3,4}$/;
const regMonth = /^(?:[1-9]|1[0-2])$/;
const regYear = /^(?:2[3-9]|[3-4][0-9])$/;
const numberlength= 16;

confirmClick.addEventListener('click', () => {
  // wrong inputs
  wrongLetter(cardHolder);
  wrongNumbers();
  wrongCVC(cvc);
  wrongMonth();
  wrongYear();

  // checking all buttons and inputs for go to second page
  if (regName.test(cardHolder.value) && regMonth.test(month.value) && regYear.test(year.value) && cardNumber.value.length === 16 && regCvc.test(cvc.value)) {
    personContainer.style.display = 'none';
    personResult.style.display = 'flex';
  }
});




function numberCards () {
  cardNumber.addEventListener('input', () => {
    cardNumber.value = cardNumber.value.replace(/\D/g, '');
    let chucks = cardNumber.value.match(/.{1,4}/g);
    let joinskip = chucks.join(" ");
    if (joinskip.length <= 19) {
      cardNums.innerHTML=joinskip;

    } else {
      cardNumber.value = cardNumber.value.slice(0, 15);
    }
    cardNums.innerHTML= joinskip;
  })
}

function wrongLetter (x) {
  
  if(!regName.test(x.value)){
    cardHolder.style.border = '1px solid red';
    wrongName.style.display = 'block';
  }else{
    x.style.border = '1px solid #DFDEE0';
    wrongName.style.display = 'none';
  }
}

function wrongNumbers(){
  if(cardNumber.value.length < numberlength){
    cardNumber.style.border = '1px solid red';
    wrongNumbersFunc.style.display = 'block';
  }else{
    cardNumber.style.border = '1px solid #DFDEE0';
    wrongNumbersFunc.style.display = 'none';
  }
}

function wrongCVC (x){
  cvc.value = cvc.value.replace(/\D/g, '');
  if(!regCvc.test(x.value)){
    x.style.border = '1px solid #ff5050';
    wrongCv.style.display = 'block';
  }else{
    x.style.border = '1px solid #DFDEE0';
    wrongCv.style.display = 'none';
  }
}

function wrongMonth (){
  if(!regMonth.test(month.value)){
    month.style.border = '1px solid #ff5050';
    wrongMonthValue.style.display = 'block';
  }else{
    month.style.border = '1px solid #DFDEE0'
    wrongMonthValue.style.display ='none';
  }
}

function wrongYear () {
  if(!regYear.test(year.value)){
    year.style.border = '1px solid #ff5050';
    wrongYearValue.style.display = 'block';
  }else{
    year.style.border = '1px solid #DFDEE0'
    wrongYearValue.style.display ='none';
  }
}

// instantly reflect value of an input
// x - input y - output
function copyInput(x,y){
  x.addEventListener("input", () => {
      y.innerHTML= x.value;
  } );
}

function copyYear() {
  year.addEventListener('input', () => {
    yearMonth.innerHTML= "/" + year.value;
  })
}
copyInput (cardHolder, userName);

copyInput (cvc, cvcBack);

copyInput (month, monthYear);

copyYear ();

numberCards ();

console.log (copyInput);


function continue1() {
  cardHolder.value = '';
  cardNumber.value = '';
  cvc.value = '';
  month.value = '';
  year.value = '';
  cardHolder.textContent = "e.g. Jane Appleseed";
  cardNumber.textContent = "0000 0000 0000 0000";
  monthYear.textContent = "00"
  yearMonth.textContent = "/00"
  cvcBack.textContent = "000";
  personResult.style.display = "none";
  personContainer.style.display = "flex";
  
}

continue2.addEventListener("click", () => {
  continue1();
})



