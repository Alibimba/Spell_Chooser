let pole =document.querySelector('.pole');
let poisk =document.querySelector('.poisk');
let vvod =document.querySelector('#vvod');
let ok =document.querySelector('#ok');
let infa =document.querySelector('.infa');
let obsh =document.querySelector('.obsh');
let iii =document.querySelector('.iii');
let kartin =document.querySelector('.kartin');
let nazv =document.querySelector('.nazv');
let opis =document.querySelector('.opis');



let skills = [
    {
        name:'Порча',
        har:'<p>Урон 5, ОД 70, Слотов памяти - 2</p>',
        img: 'css/images/foto.JPG',
        opis:'gojierjgrehjhpjhperjhpijrehierhjoerhjeorihjreoihjreioherhjreoihjrehijrehoierjhoirejh',
    }
]







ok.addEventListener('click', function (){
    infa.innerHTML = ''
    skills.forEach(function (el){
        // let infa =document.createElement('div');
        let obsh =document.createElement('div');
        let iii =document.createElement('div');
        let kartin =document.createElement('img');
        let nazv =document.createElement('div');
        let opis =document.createElement('div');


        infa.classList.add('infa')
        obsh.classList.add('obsh')
        iii.classList.add('iii')
        kartin.classList.add('kartin')
        nazv.classList.add('nazv')
        opis.classList.add('opis')

        // pole.appendChild(infa)
        obsh.appendChild(kartin)
        obsh.appendChild(nazv)
        obsh.appendChild(iii)
        infa.appendChild(obsh)
        infa.appendChild(opis)

        nazv.innerHTML += el.name + '<br>' + '<br>' + el.har + '<style>p{font-size: 16px;}</style>';



        opis.innerHTML += '<h3>Описание </h3>' + '<br>' + el.opis;

        iii.style.background = "url('"+ el.img + "') center no-repeat";
        iii.style.backgroundSize = "cover";
    });
});