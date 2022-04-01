let data = [
    {
        name: 'Bundy',
        age: '32',
    },
    {
        name: 'Meghan',
        age: '27',
    },
    {
        name: 'Dani',
        age: '17',
    },
    {
        name: 'Quinn',
        age: '5',
    },
    {
        name: 'Khakled',
        age: '1',
    },
    {
        name: 'Joey',
        age: '50',
    },
];

const info = document.querySelector('#info')


let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + 
    ' years old' + '</div>';
})

info.innerHTML= details.join('\n');


