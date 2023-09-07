const numKm = prompt('quanti km hai intenzione di percorrere?');

const age = parseInt(prompt('quanti anni hai?'));

const ticketPrice = numKm * 0.21;

const ticketPriceDiscount20 = ticketPrice - (ticketPrice / 5);

const ticketPriceDiscount40 = ticketPrice - (ticketPrice / 2.5);

let customPrice; 





if (isNaN(numKm) || isNaN(age)){
  customPrice = '! ERRORE ! Si prega di inserire età e km in formato numerico.'
}else if(age < 18){
  customPrice = (Math.round(ticketPriceDiscount20 * 100) / 100) + '€';
}else if(age > 65){
  customPrice = (Math.round(ticketPriceDiscount40 * 100) / 100) + '€';
}else{
  customPrice = (Math.round(ticketPrice * 100) / 100) + '€';
};





document.getElementById('output').innerHTML = customPrice;