// ALBANIA JS

const alb_image = document.getElementById('albania_img');
const alb_text = document.getElementById('alb-text')
const imageSources_alb = [
    'assets/country-outlines/color-albania.png',
    'assets/albania/alb_pesto_shrimp.JPG',
    'assets/albania/alb-tiramisu.JPG',
    'assets/albania/alb-shrimp-scallop.JPG'
]

const descript_alb = [
    'Albania', 
    'Shrimp and Pesto Pasta',
    'Tiramisu',
    'Shrimp and Scallop Pasta'
]

const altText_alb = [
    'Blue Outline of Albania',
    'Bowl of shrimp and pesto pasta',
    'Slice of Tiramisu',
    'Bowl of Shrimp and Scallop Pasta'
]
let currentIndex_alb=0;

alb_image.addEventListener('click', function (){
    currentIndex_alb= (currentIndex_alb + 1) % imageSources_alb.length;
    alb_image.src = imageSources_alb[currentIndex_alb];
    alb_image.alt = altText_alb[currentIndex_alb]
    alb_text.innerHTML = descript_alb[currentIndex_alb];
});


// KOSOVO JS

const ks_img = document.getElementById('kosovo_img');
const ks_text = document.getElementById('kosovo-text')
const imageSources_ks = [
    'assets/country-outlines/color-kosovo.png',
    'assets/kosovo/kosove-croissants.JPG',
    'assets/kosovo/kosovo-pizza.JPG',
    'assets/kosovo/kosovo-oreo.JPG'
]

const descript_ks = [
    'Kosovo', 
    'Pistachio & Choco Croissant',
    'Beef Prosciutto Pizza',
    'Oreo Cookie Skillet'
]

const altText_ks = [
    'Pink Outline of Kosovo',
    'A chocolate and pistachio croissant on a table',
    'A pizza on a table',
    'A chocolate cookie skillet with a scoop of icecream'
]
let currentIndex_ks=0;

ks_img.addEventListener('click', function (){
    currentIndex_ks= (currentIndex_ks + 1) % imageSources_alb.length;
    ks_img.src = imageSources_ks[currentIndex_ks];
    ks_img.alt = altText_ks[currentIndex_ks]
    ks_text.innerHTML = descript_ks[currentIndex_ks];
});


// MEXICO JS

const mx_img = document.getElementById('mexico_img');
const mx_text = document.getElementById('mx-text')
const imageSources_mx = [
    'assets/country-outlines/color-mexico.png',
    'assets/mexico/mexico-poke.jpg',
    'assets/mexico/mexico-taco.jpg',
    'assets/mexico/mexico-potatoes.jpg'
]

const descript_mx = [
    'Mexico', 
    'Mango Poke Bowl',
    'Ahi Tuna Tacos',
    'Breakfast Potatoes'
]

const altText_mx = [
    'Pink Outline of Mexico',
    'A poke bowl with mango sauce on it',
    'A plate with tuna tacos topped with avocado and mayo sauce',
    'Potatoes with two eggs on top and an orange garnish'
]
let currentIndex_mx=0;

mx_img.addEventListener('click', function (){
    currentIndex_mx= (currentIndex_mx + 1) % imageSources_mx.length;
    mx_img.src = imageSources_mx[currentIndex_mx];
    mx_img.alt = altText_mx[currentIndex_mx]
    mx_text.innerHTML = descript_mx[currentIndex_mx];
});


// FRANCE JS

const fr_img = document.getElementById('france_img');
const fr_text = document.getElementById('france_text')
const imageSources_fr = [
    'assets/country-outlines/color-france.png',
    'assets/france/france-sushi.jpg',
    'assets/france/france-pasta.jpg',
    'assets/france/france-pastries.jpg'
]

const descript_fr = [
    'France', 
    'Mango Salmon Sushi',
    'Penne Arrabbiata',
    'Pain au Chocolat & Eclairs'
    
]

const altText_fr = [
    'Pink Outline of France',
    'A sushi roll with salmon and mango on a lit up table',
    'Penne pasta in a bowl with spicy sauce',
    'Multiple different french pastries on a table'
    
]
let currentIndex_fr=0;

fr_img.addEventListener('click', function (){
    currentIndex_fr= (currentIndex_fr + 1) % imageSources_fr.length;
    fr_img.src = imageSources_fr[currentIndex_fr];
    fr_img.alt = altText_fr[currentIndex_fr]
    fr_text.innerHTML = descript_fr[currentIndex_fr];
});


// SWITZERLAND JS

const sw_img = document.getElementById('switzerland_img');
const sw_text = document.getElementById('switzerland_text')
const imageSources_sw = [
    'assets/country-outlines/color-switzerland.png',
    'assets/switzerland/switzerland-padthai.jpg',
    'assets/switzerland/switzerland-waffle.jpg',
    'assets/switzerland/switzerland-doner.jpg'
]

const descript_sw = [
    'Switzerland', 
    'Chicken Pad Thai',
    'Heart Waffle',
    'Doner Kebab'
    
]

const altText_sw = [
    'Blue Outline of Switzerland',
    'A bowl of chicken pad thai',
    'Heart shaped waffle on a plate',
    'Doner kebab sandwich on a tray'
    
]
let currentIndex_sw=0;

sw_img.addEventListener('click', function (){
    currentIndex_sw= (currentIndex_sw + 1) % imageSources_sw.length;
    sw_img.src = imageSources_sw[currentIndex_sw];
    sw_img.alt = altText_sw[currentIndex_sw]
    sw_text.innerHTML = descript_sw[currentIndex_sw];
});