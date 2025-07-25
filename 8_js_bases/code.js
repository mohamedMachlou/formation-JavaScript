// var n = 20;

// let d = 50

// // let name = "mohamed" 
// const pi = 3.14

// if (d == 50 ){
    //    let name = "mohamed" 
    // }
    
    // console.log(pi)

//////////////////////////////////////
    // let d = 50

// while(d==50 && d !=57){
//     console.log('la valeur de d est : ',d)
//     console.error('la valeur de d est : ',d)
//     console.warn('la valeur de d est : ',d)
// }

// if(d!=60 || d !=57){
//     console.log(`la valeur de d est : ${d}`);
//     console.error(`la valeur de d est : ${d}`);
//     console.war(`la valeur de d est : ${d}`)
// }

// let d = "javascript"

// for(let k=3; k<15; k++) {

//     console.log(`la valeur de d est : ${d}`);

// }


// let nom = "     mohamed     ";

// console.log(nom.includes('t'))
// console.log(nom.length)
// console.log(nom.replace('moh','rok'))
// console.log(nom)
// console.log(nom.trim())
// console.log(nom.trim().length)



// let tab = [2, "J"]

// let nom = "mohamed";
// //const nom = "mohamed";

// if(nom){
//     let i=30;
//     console.log(i)
// }

// //print 
// console.log(nom)

//let nom = "mohamed";


///////////////////////////////////////////////////
let tab = [2, "Javascript", true]

////////////////////
// for(let i=0; i<tab.length; i++){
    
//      console.log(`${i}   ${tab[i]}`)

// }
////////////////////

// tab.forEach((elem,ind) => {  
//     console.log(` ${ind} --- ${elem}   `)
// })

////////////////////
// console.log(tab)
// tab.push('mohamed')
// tab.pop()
// tab.pop()

// tab.unshift('mohamed')
// tab.shift()
// console.log(tab)




///////////////////////////////////////////////////
// //Objet user
// let user = {
//     //key : value
//     nom: 'Mohamed',
//     prenom: 'ayoub',
//     active: true,
//     salaire: 89600,
//     courses: ['js', 'java',' python ']
// }

// let user2 = {
//     //key : value
//     'nom': 'Mohamed',
//     'prenom': 'ayoub',
//     'active': true,
//     'salaire': 89600,
//     'courses': ['js', 'java',' python ']
// }

// console.log(tab)
// console.log(user)
// console.log(user2)


////////////////////////////////////////////////////////////////////
/// fonctions 

// function affichage(){
    
//     let message = 'jkflmmfmfmffmff'
//     console.log(message)
// }

// affichage()

// function affichage(message){


//     console.log(message)
// }

// affichage("klslsksjdkdldl")


/////////////////////////////////////////////////////////////
/// Fonction expression

// const affichage2 = function(message){
    //     console.log(message)
    // }
    
    // affichage2('jdkdldldldldl')
    
/////////////////////////////////////////////////////////////
/// Fonction expression function fleche (arrow function)

// const affichage3 = (msg) => {
//     console.log(msg)
//  }

// affichage3('jdodjkdondld')



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
    }

]

/// Affichage
console.log(clients)
clients[3] =  {
    nom: 'yassine 2',
    prenom: 'ayoub',
    active: false,
    salaire: 44444,
    courses: ['js', 'GO',' python ']
    }

console.log(clients)

// ForEach
// // clients.foreach( ()=>{}  )
// clients.forEach((client,i) => {
//     console.log(client.courses)

// } )


//Filter 
// clients.filter(()=>{} )
// let filtredCl = clients.filter((client)=>{ return !client.active } )
// console.log(filtredCl)

//Map
//clients.map(() => {})
// let result = clients.map((client) => {
//     if(client.active == false){
//         return {
//                 nom: client.nom,
//                 prenom: client.prenom,
//                 active: true,
//                 salaire: client.salaire,
//                 courses: client.courses

//         }
//     }else{
//         return client
//     }
// })

// console.log(result)

// Reduce 
// clients.reduce((acc, client) => {},init)
// let result = clients.reduce((acc, client) => {
//     return acc += client.salaire
// },0)
// console.log(result)











// const header = document.getElementById('idheader')
// const headers = document.getElementsByClassName('header')
// console.log(header.innerHTML)

// const header = document.querySelector('h2')
// const header = document.querySelector('#idheader')
// const header = document.querySelector('.header')
// const headers = document.querySelectorAll('.para')

// console.log(headers)

// const nom= document.querySelector('.name')

// nom.addEventListener('keyup',(n) => {
//     console.log(n.target)

    
// })
