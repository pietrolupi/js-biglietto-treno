const numKm = prompt('quanti km hai intenzione di percorrere?');

const age = parseInt(prompt('quanti anni hai?'));

let customPrice = numKm * 0.21; 


if (isNaN(numKm) || isNaN(age)){
  customPrice = '! ERRORE ! Si prega di inserire età e km in formato numerico.'
}else if(age < 18){
  customPrice = (customPrice - (customPrice * 0.2)).toFixed(2) + '€';
}else if(age > 65){
  customPrice = (customPrice - (customPrice * 0.4)).toFixed(2) + '€';
}else{
  customPrice = customPrice.toFixed(2) + '€';
};


document.getElementById('output').innerHTML = customPrice;