// Write your Pizza Builder JavaScript in this file.

// Constants 
let total = 0;

var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($gre){
    if (state.greenPeppers) {
      $gre.style.visibility = "visible";
    }
    else {
      $gre.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce.sauce-white').forEach(function($sau){
    if (state.whiteSauce) {
      $sau.style.visibility = "visible";
    }
    else {
      $sau.style.visibility = "hidden";
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let $cru = document.getElementsByClassName('crust')[0]
    if (state.glutenFreeCrust) {
      $cru.classList.add('crust-gluten-free');
    }
    else {
      $cru.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  pepButton();
  mushButton();
  greenButton();
  whiteButton();
  crustButton();
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total1 = basePrice + total;
  document.getElementById('total').innerHTML = '$' + total1;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
 pepclick();
}


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
 msuhclick();
}


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  greenclick();
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  whiteclick();
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  crustclick();
}

function pepclick () {
  state.pepperonni = !state.pepperonni
  renderEverything()
  let didRun = false;
  !didRun;
  renderButtons();
  return didRun;
}

function msuhclick () {
  state.mushrooms = !state.mushrooms
  renderEverything()
  let didRun = false;
  !didRun;
  renderButtons();
  return didRun;
}

function greenclick () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
  let didRun = false;
  !didRun;
  renderButtons();
  return didRun;
}

function whiteclick () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
  let didRun = false;
  !didRun;
  renderButtons();
  return didRun;
}

function crustclick () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
  let didRun = false;
  !didRun;
  renderButtons();
  return didRun;
}

function pepButton () {
  if (state.pepperonni === true) {
    document.querySelector('.btn.btn-pepperonni').classList.add('active');
    total =+ ingredients.pepperonni.price;
  }
  else {
    document.querySelector('.btn.btn-pepperonni').classList.remove('active');
    total =- ingredients.pepperonni.price;
  }
}

function mushButton () {
  if (state.mushrooms === true) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
    total =+ ingredients.mushrooms.price;
  }
  else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
    total =- ingredients.mushrooms.price;
  }
}

function greenButton () {
  if (state.greenPeppers === true) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
    total += ingredients.greenPeppers.price;
  }
  else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
    total -= ingredients.greenPeppers.price;
  }
}

function whiteButton () {
  if (state.whiteSauce === true) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
    total += ingredients.whiteSauce.price;
  }
  else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
    // total -= ingredients.whiteSauce.price;
  }
}

function crustButton () {
  if (state.glutenFreeCrust === true) {
    document.querySelector('.btn.btn-crust').classList.add('active');
    total += ingredients.glutenFreeCrust.price;
  }
  else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
    // total -= ingredients.glutenFreeCrust.price;
  }
}