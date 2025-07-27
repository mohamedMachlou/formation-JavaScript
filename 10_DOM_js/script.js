///////////////////////////////////////////////////////////////////////////////////
///////////////// 1. Comprendre le DOM
///////////////////////////////////////////////////////////////////////////////////

// Le DOM (Document Object Model) représente la structure HTML sous forme d'objet JS.
// Chaque élément HTML est un nœud que l'on peut manipuler.
// console.log(document); // Affiche l'objet DOM complet



///////////////////////////////////////////////////////////////////////////////////
///////////////// 2. Le Query Selector
///////////////////////////////////////////////////////////////////////////////////
// const title = document.getElementsByClassName('header')
// console.log(title[0].innerText)

// Permet de sélectionner un élément avec un sélecteur CSS.
// const titre = document.querySelector('h1');
// console.log(titre.textContent);

// Ex
// const input = document.querySelectorAll('.my-input')
// console.log(input)



///////////////////////////////////////////////////////////////////////////////////
///////////////// 3. Autres techniques pour interagir avec le DOM
///////////////////////////////////////////////////////////////////////////////////

// Quelques alternatives : getElementById, getElementsByClassName, getElementsByTagName
// const bouton = document.getElementById('btn');
// const items = document.getElementsByClassName('item');
// const divs = document.getElementsByTagName('div');




///////////////////////////////////////////////////////////////////////////////////
///////////////// 4. Changer et ajouter du contenu à la page
///////////////////////////////////////////////////////////////////////////////////

// const paragraphe = document.querySelector('p');
// paragraphe.textContent = 'Nouveau texte ajouté ';
// paragraphe.innerHTML += '<h2> Texte en gras </h2>';
// console.log(paragraphe)

// const title = document.querySelector('span')
// console.log(title.innerText)


///////////////////////////////////////////////////////////////////////////////////
///////////////// 5. Récupérer et modifier un attribut d’un DOM
///////////////////////////////////////////////////////////////////////////////////

// const image = document.querySelector('img');
// console.log(image)
// console.log(image.getAttribute('src'));
// image.setAttribute('src', '../0_football/photo__Diaz.png');



///////////////////////////////////////////////////////////////////////////////////
///////////////// 6. Changer le style CSS
///////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector('span');
// title.style.color = 'red'
// title.style.padding = '10px';



///////////////////////////////////////////////////////////////////////////////////
///////////////// 7. Ajouter et supprimer une classe depuis un DOM
///////////////////////////////////////////////////////////////////////////////////

// const image = document.querySelector('img');
// image.classList.add('active');
// image.classList.add('deactive');
// image.classList.remove('active');
// titre2.classList.toggle('highlight');



///////////////////////////////////////////////////////////////////////////////////
///////////////// 8. Handling Parent / Children DOM
///////////////////////////////////////////////////////////////////////////////////

// const container = document.querySelector('.container');
// const firstChild = container.firstElementChild;
// console.log(firstChild)

// const parent = container.parentElement;
// console.log(parent)
// console.log(parent, firstChild);



///////////////////////////////////////////////////////////////////////////////////
///////////////// 9. addEventListener - Event Click
///////////////////////////////////////////////////////////////////////////////////

// const mybutton = document.querySelector('.btn');
// const pass = document.querySelector('.password')
// console.log(mybutton)
// mybutton.addEventListener('click', (saf) => {
//     saf.preventDefault()
//     pass.classList.add('active')
// });



///////////////////////////////////////////////////////////////////////////////////
///////////////// 10. Ajouter & Supprimer un élément du DOM
///////////////////////////////////////////////////////////////////////////////////

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// const li2 = document.createElement('li');
// li.textContent = 'Home';
// li2.textContent = 'About';
// ul.appendChild(li); // Ajout
// ul.appendChild(li2); // Ajout
// li2.remove(); // Suppression



///////////////////////////////////////////////////////////////////////////////////
///////////////// 11. Event Propagation & Delegation
///////////////////////////////////////////////////////////////////////////////////

// Capture ou bubbling (par défaut : bubbling)
// document.querySelector('ul').addEventListener('click', (e) => {
//     console.log('Parent cliqué');
// });

// document.querySelector('li').addEventListener('click', (e) => {
//     e.stopPropagation(); // Empêche la propagation vers le parent
//     console.log('Enfant cliqué');
// });

// Délégation : utile quand les enfants sont dynamiques
// document.querySelector('#liste').addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         console.log('Item cliqué :', e.target.textContent);
//     }
// });


// const title = document.querySelector('span')

// title.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log( e.target.innerHTML);
//         e.target.innerHTML += ' Med'

//     })

// title.addEventListener('mouseout', (e) => {
//         e.preventDefault()
//         console.log( e.target.innerHTML);
//         e.target.innerHTML += ' Med'

//     })


///////////////////////////////////////////////////////////////////////////////////
///////////////// 12. Autres événements : copy, mousemove
///////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('copy', () => {
//     alert('Vous avez copié quelque chose');
// });

// document.addEventListener('mousemove', (e) => {
//     console.log(`Souris à ${e.clientX}, ${e.clientY}`);
// });



///////////////////////////////////////////////////////////////////////////////////
///////////////// 13. Les formulaires et les événements
///////////////////////////////////////////////////////////////////////////////////

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Empêche l'envoi
//     const nom = document.querySelector('#nom').value;
//     alert('Nom saisi : ' + nom);
// });

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////