let messages = ['Abrir (To open)',
    'Ayudar (To help)',
    'Estar (To be)',
    'Gustar (To like)',
    'Jugar (To play)',
    'Llamar (To call)',
    'Querer (To want)',
    'Tener (To have)',
    'Ser (To be)',
    'Saber (To know)',
    'Caliente (Hot)',
    'Frío/ fría (Cold)',
    'Lluvia (Rain)',
    'Sol (Sun)',
    'Luna (Moon)',
    'Nieve (Snow)',
    'Viento (Wind)'
    ];
//console.log(message.length)

let randomNumber = Math.floor(Math.random()* messages.length);
//console.log(randomNumber)


console.log(messages[randomNumber]);