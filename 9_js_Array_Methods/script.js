// Objet

let clients = [
    {
    nom: 'Mohamed',
    prenom: 'ayoub',
    active: true,
    salaire: 89600,
    courses: ['js', 'java',' python ']
    },
    {
    nom: 'yassine',
    prenom: 'ayoub',
    active: false,
    salaire: 44444,
    courses: ['js', 'GO',' python ']
    },
    {
    nom: 'Mourad',
    prenom: 'ayoub',
    active: true,
    salaire: 89600,
    courses: ['js', 'java',' python ']
    },
    {
    nom: 'yassine',
    prenom: 'ayoub',
    active: false,
    salaire: 44444,
    courses: ['js', 'GO',' python ']
    }

]

// affichage 
// clients.forEach(  (client) => { 

//         console.log(client)  

//     })


/////////////////////Map  changement

// let newClients =  clients.map( (client) => { 

//     if(client.active){

//         client.salaire += 800000
//     }
//     return client

//  })

// console.log(newClients)  




// //////////////////////// Filter filtre a condition
// let search = 'mo'
// let clientsFiltred = clients.filter( (client) => {
//     return client.nom.toLowerCase().startsWith(search.toLowerCase())
// })

// console.log(clientsFiltred)  


// //////////////////// Reduce


// let allSalaires = clients.map((client) => {
//     return client.salaire
// })
  

// let totalSal = allSalaires.reduce((acc, sal) => {
//     return acc + sal
// },0)

// console.log(totalSal)


////////////////////////
// let totalSal = clients.map((client) => { return client.salaire}).reduce((acc, sal) =>{ return acc + sal},0)
// console.log(totalSal)



// Ex 2 : reduce 

/* 
numbers.reduce(   (acc, nobmre) => {
   return total + nombre;
   }, valeur initial     );

*/

// const numbers = [20, 100, 20, 40];


// let myTotal = numbers.reduce((total, nombre) => {
//   return total * nombre;
// }, 1);

// console.log(myTotal)

