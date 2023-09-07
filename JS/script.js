const numKm = prompt('quanti km hai intenzione di percorrere?');

const age = prompt('quanti anni hai?');

const ticketPrice = numKm * 0.21;

const ticketPriceDiscount20 = ticketPrice - (ticketPrice / 5);

const ticketPriceDiscount40 = ticketPrice - (ticketPrice / 2.5);


console.log(ticketPrice);
console.log(ticketPriceDiscount40);