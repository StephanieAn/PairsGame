let items = [
    {name : 'Pairs 1',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs2.jpg?raw=true')},
    {name : 'Pairs 2',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs3.jpg?raw=true')},
    {name : 'Pairs 3',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs4.jpg?raw=true')},
    {name: 'Pairs 4',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs5.jpg?raw=true')},
    {name: 'Pairs 5',
    src: ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs6.jpg?raw=true')},
    {name: 'Pairs 6',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs7.jpg?raw=true')},
    {name :'Pairs 7',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs8.jpg?raw=true')},
    {name : 'Pairs 8',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs9.jpg?raw=true')},
    {name : 'Pairs 9',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs10.jpg?raw=true')}
];

let doubleItems = items.concat(items);
let i = 0;

export let Items = () => {
    for (let index = 0; index < 18; index++) {  
        
        let x = Math.floor(Math.random() * doubleItems.length);
        let randomElement = doubleItems[x];
        doubleItems.splice(x, 1)
            
        let template = document.getElementsByTagName('template')[0];
        let target = document.getElementById('Playground');
        let clone = template.content.cloneNode(true);
        
        clone.querySelector("img").src= randomElement.src;
        clone.querySelector("img").alt = randomElement.name;
        clone.querySelector('button').setAttribute('id', i++);
        clone.querySelector('button').setAttribute('Onclick', null);
        
        target.appendChild(clone);
    };
};
