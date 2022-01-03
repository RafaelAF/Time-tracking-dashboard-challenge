let day = document.getElementById('day');
let week = document.getElementById('week');
let mon = document.getElementById('mon');
let cardHour1 = document.getElementById('card-hour1');
let cardHour2 = document.getElementById('card-hour2');
let cardHour3 = document.getElementById('card-hour3');
let cardHour4 = document.getElementById('card-hour4');
let cardHour5 = document.getElementById('card-hour5');
let cardHour6 = document.getElementById('card-hour6');
let cardDescrip1 = document.getElementById('card-description1');
let cardDescrip2 = document.getElementById('card-description2');
let cardDescrip3 = document.getElementById('card-description3');
let cardDescrip4 = document.getElementById('card-description4');
let cardDescrip5 = document.getElementById('card-description5');
let cardDescrip6 = document.getElementById('card-description6');

day.addEventListener('click', () => {
    day.classList.add('active');
    week.classList.remove('active');
    mon.classList.remove('active');
    

    cardHour1.innerHTML = '5hrs'; //<!-- daily -->
    cardHour2.innerHTML = '1hr'; 
    cardHour3.innerHTML = '0hrs';
    cardHour4.innerHTML = '1hr';
    cardHour5.innerHTML = '1hr';
    cardHour6.innerHTML = '0hrs';

    cardDescrip1.innerHTML = 'Previous - 7hrs'; //<!-- daily -->
    cardDescrip2.innerHTML = 'Previous - 2hrs';
    cardDescrip3.innerHTML = 'Previous - 1hr';
    cardDescrip4.innerHTML = 'Previous - 1hr';
    cardDescrip5.innerHTML = 'Previous - 3hrs';
    cardDescrip6.innerHTML = 'Previous - 1hr';
})

week.addEventListener('click', () => {
    day.classList.remove('active');
    week.classList.add('active');
    mon.classList.remove('active');

    cardHour1.innerHTML = '32hrs'; //<!-- weekly -->
    cardHour2.innerHTML = '10hrs';
    cardHour3.innerHTML = '4hrs';
    cardHour4.innerHTML = '4hrs';
    cardHour5.innerHTML = '5hrs';
    cardHour6.innerHTML = '2hrs';

    cardDescrip1.innerHTML = 'Previous - 36hrs';  //  <!-- weekly -->
    cardDescrip2.innerHTML = 'Previous - 8hrs';
    cardDescrip3.innerHTML = 'Previous - 7hrs';
    cardDescrip4.innerHTML = 'Previous - 5hrs';
    cardDescrip5.innerHTML = 'Previous - 10hrs';
    cardDescrip6.innerHTML = 'Previous - 2hrs';
    
})

mon.addEventListener('click', () => {
    day.classList.remove('active');
    week.classList.remove('active');
    mon.classList.add('active');

    cardHour1.innerHTML = '103hrs'; //<!-- monthly -->
    cardHour2.innerHTML = '23hrs';
    cardHour3.innerHTML = '13hrs';
    cardHour4.innerHTML = '11hrs';
    cardHour5.innerHTML = '21hrs';
    cardHour6.innerHTML = '7hrs';

    cardDescrip1.innerHTML = 'Previous - 128hrs'; //<!-- monthly -->
    cardDescrip2.innerHTML = 'Previous - 29hrs';
    cardDescrip3.innerHTML = 'Previous - 19hrs';
    cardDescrip4.innerHTML = 'Previous - 18hrs';
    cardDescrip5.innerHTML = 'Previous - 23hrs';
    cardDescrip6.innerHTML = 'Previous - 11hrs';
})