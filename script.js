//Lasagne

let amountsLasa = [8, 600, 3, 1 ,1, 1, 2, 200, 500, 2, 1, 2, 3, 500, 1, 100]
let ingredientLasa = [' Lasagneplatten', 'g Hackfleisch', ' EL Olivenöl', ' große Möhre(n)', ' Stück Knollensellerie, etwa gleich viel wie die Möhre(n)', ' große Zwiebel(n)', ' Knoblauchzehe(n)', 'ml Weißwein', 'ml Gemüsebrühe', ' EL Tomatenmark', ' Prise(n) Salz und Pfeffer', ' TL Zucker', ' EL Butter', ' EL Mehl', 'ml Milch', ' TL Spitze(n)', 'g Parmesan']

//Bolognese

let amountsBolo = [15, 150, 60, 40, 4, 250, 125, 400, 15, 2, 1, 2]
let ingredientsBolo = ["ml Olivenöl", "g Zwiebel, fein gewürfelt", "g Karotte, gewürfelt", "g Selleriestange, gewürfelt", " Knoblauchzehe(n)", "g gemischtes Hackfleisch (Rind und Schwein)", " ml Rotwein (optional)", "g g Dosentomaten (gehackt)", "g Tomatenmark", " Teelöff Zucker", " Prise Salz und Pfeffer zum Abschmecken", "g Frisches Basilikum, grob gehackt"]

//Zimtschnecken

let amountsCinnamon = [250, 75, 75, 1, 100, 500, 1, 50, 50,]
let ingredientsCinnamon = ["g Quark", "ml Milch", "ml Sonnenblumenöl", " Pack Vanilin", "g Zucker", "g Mehl", " Pack Backpulver", "g geschmolzene Butter", "g Zimt - Zucker Mischung"]

//Linsen

let amountsLinse = [250, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2]
let ingredientsLinse = ['g grüne oder braune Linsen', 'Zwiebel, gewürfelt', 'Karotten, gewürfelt', 'Selleriestangen, gewürfelt', 'Knoblauchzehen, gehackt', 'Dose gehackte Tomaten', 'Liter Gemüsebrühe', 'TL Kreuzkümmel', 'TL Paprikapulver', 'TL Kurkuma', 'Priese Salz und Pfeffer', 'EL Olivenöl', 'g Frische Petersilie'];




//Lasagne

function createTableLasa() {
  document.getElementById('portion-input').value = 4;
    for (let i=0; i<amountsLasa.length; i++) {
        document.getElementById('table').innerHTML +=
        `<tr><td>${amountsLasa[i]}${ingredientLasa[i]}</td></tr>`;
    }
    
}


function calcPortionLasa() {
    let portion = +document.getElementById('portion-input').value;
    if(portion <=0 || portion >=10) {
      alert('Bitte gib eine Portionsmenge zwischen 1 und 9 an!');
      
    }else {
      cleanTable();
      document.getElementById('portion-input').value = '';
    for (let i=0; i<amountsLasa.length; i++) {
        document.getElementById('table').innerHTML +=
        `<tr><td>${(amountsLasa[i]*portion)/4}${ingredientLasa[i]}</td></tr>`;
    }
  }
}

//Zimtschnecken

function createTableCinnamon() {
  document.getElementById('portion-input').value = 1;
    for (let i = 0; i < amountsCinnamon.length; i++) {
        document.getElementById("table").innerHTML +=
            `<tr><td>${amountsCinnamon[i]}${ingredientsCinnamon[i]}</td></tr>`;
    }
}


function calcPortionCinnamon() {
    let portion = +document.getElementById("portion-input").value;
    if(portion <=0 || portion >=10) {
      alert('Bitte gib eine Portionsmenge zwischen 1 und 9 an!')
    }else {
    document.getElementById('portion-input').value = '';
    cleanTable();
    for (let i = 0; i < amountsCinnamon.length; i++) {
        let portionAmountCinnamon = amountsCinnamon[i] * portion
        document.getElementById("table").innerHTML +=
            `<tr><td>${portionAmountCinnamon}${ingredientsCinnamon[i]}</td></tr>`;

    }
  }
}


//Bolognese

function createTableBolo() {
  document.getElementById('portion-input').value = 1;
    for (let i = 0; i < amountsBolo.length; i++) {
        document.getElementById("table").innerHTML +=
            `<tr><td>${amountsBolo[i]}${ingredientsBolo[i]}</td></tr>`;
    }
}


function calcPortionBolo() {
    let portion = +document.getElementById("portion-input").value;
    if(portion <=0 || portion >=10) {
      alert('Bitte gib eine Portionsmenge zwischen 1 und 9 an!')
    }else {
    document.getElementById('portion-input').value = '';
    cleanTable()
    for (let i = 0; i < amountsBolo.length; i++) {
        let portionAmountBolo = amountsBolo[i] * portion;
        document.getElementById("table").innerHTML +=
            `<tr><td>${portionAmountBolo}${ingredientsBolo[i]}</td></tr>`;

    }
  }
}
function cleanTable() {
  document.getElementById('table').innerHTML = "";
}

//Linsen

function calcPortionLinse() {
  document.getElementById('table').innerHTML = ``;
  let readNumber = +document.getElementById('portion-input').value;
  if (readNumber <= 0) {
    alert('Bitte geben Sie eine Zahl größer Null ein!');
    document.getElementById('portion-input').value = 1;
    calcPortionLinse();
    }
  for (let i = 0, j = 0; i < amountsLinse.length, j < ingredientsLinse.length; i++, j++) {
      document.getElementById('table').innerHTML += `<tr><td>${readNumber * amountsLinse[i]} ${ingredientsLinse[j]}</td></tr>`;
  }
}

// Email

function valid() {
  let name = document.getElementById("name-input").value;
  let email = document.getElementById("mail-input").value;
  let message = document.getElementById("message-input").value;

  if (name === ''|| email === '' || message === '') {
    alert("Bitte fülle alle Felder aus.");
      return false;
  }else {
    return true;
  }
}

// Burger-Menü

function showMenuLinks() {
  let burger_menu = document.getElementById('nav-burger-links');
  burger_menu.classList.toggle("nav-burger-links");
}
