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
        id:'1',
        name:'Порча',
        har:'<p>Урон 30, ОД 3, Слотов памяти - 1</p>',
        img: '<img src="css/image/foto.JPG" class="kartinn">',
        opis:'Подошёл ударил врага порчей, он заражается порчей, порча отнимает отнимает хп, крутая кроче, но маленький радиус действия',
    },
    {
        id:'2',
        name:'Рой маскитов',
        har:'<p>Урон 15, ОД 2, Слотов памяти - 1</p>',
        img: '<img src="css/image/rr.JPG" class="kartinn">',
        opis:'Пускает на большое растояние рой маскитов которые дамажат врага, а тебя хилят, крутой скил кароче, но иногда мало дамажит, но хилит, так что норм',
    },
    {
        id:'3',
        name:'Бросок щита',
        har:'<p>Урон 20, ОД 2, Слотов памяти - 1</p>',
        img: '<img src="css/image/bros.JPG" class="kartinn">',
        opis:'Чел кидает чето похожее на щит, он рекошетит раза 2, урона нормально так нанаосит. И чета вроде станить должен или нет. Не помню. МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО С ЩИТОМ',
    }
]

vvod.addEventListener('input', function (ev) {
    skills.forEach(function (skill) {

        if (skill.name.toLowerCase() === vvod.value.toLowerCase() ) {

            infa.innerHTML = ''
            console.log(skill);
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
            obsh.appendChild(iii)
            obsh.appendChild(nazv)

            infa.appendChild(obsh)
            infa.appendChild(opis)

            nazv.innerHTML += skill.name + '<br>' + '<br>' + skill.har + '<style>p{font-size: 16px;}</style>';

            iii.innerHTML += skill.img;

            opis.innerHTML += '<h3>Описание </h3>' + '<br>' + skill.opis;
        }
    })
    // console.log(vvod.value);
})





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
        obsh.appendChild(iii)
        obsh.appendChild(nazv)

        infa.appendChild(obsh)
        infa.appendChild(opis)

        nazv.innerHTML += el.name + '<br>' + '<br>' + el.har + '<style>p{font-size: 16px;}</style>';

        iii.innerHTML += el.img;

        opis.innerHTML += '<h3>Описание </h3>' + '<br>' + el.opis;


    });
});