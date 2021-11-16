let items = [
    {id: 1, 
    name : 'Pairs 1',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/pairs1.jpg?raw=true')},
    {id: 2, 
    name : 'Pairs 2',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs2.jpg?raw=true')},
    {id: 3, 
    name : 'Pairs 3',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs3.jpg?raw=true')},
    {id: 4, 
    name : 'Pairs 4',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs4.jpg?raw=true')},
    {id: 5, 
    name: 'Pairs 5',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs5.jpg?raw=true')},
    {id: 6, 
    name: 'Pairs 6',
    src: ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs6.jpg?raw=true')},
    {id: 7, 
    name: 'Pairs 7',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs7.jpg?raw=true')},
    {id : 8,
    name :'Pairs 8',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs8.jpg?raw=true')},
    {id : 9,
    name : 'Pairs 9',
    src :('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs9.jpg?raw=true')},
    {id : 10,
    name : 'Pairs 10',
    src : ('https://github.com/StephanieAn/PairsGame/blob/master/ressources/Pairs10.jpg?raw=true')}
];

let itemsJSON = JSON.stringify(items);
window.localStorage.setItem('items', itemsJSON);
let item = JSON.parse(window.localStorage.getItem('items'));
let i = 0;

export function Items() {    
    for (let index = 0 ; index < 20; index++) {
        let x = Math.round(Math.random() * 9);
        
        let template = document.getElementsByTagName('template')[0];
        let target = document.getElementById('Playground');
        let clone = template.content.cloneNode(true);
    
        clone.querySelector("img").src= item[x].src;
        clone.querySelector("img").alt = item[x].id;
        clone.querySelector('button').setAttribute('id', i++);
    
        target.appendChild(clone);
        
    }
   
}
