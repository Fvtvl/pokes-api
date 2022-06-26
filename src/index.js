import '../css/style.css';
import getRefs from './get-refs';
import templPokemonImg from '../templates/pokemon-img.hbs';
import templPokemonName from '../templates/pokemon-name.hbs';
import templPokemonCard from '../templates/pokemon-full.hbs';

let number = 0;
let pokemonName = '';
const refs = getRefs();


refs.searchForm.addEventListener('submit', onCheck);
refs.startFind.addEventListener('click', goFindPokemon);
refs.showForm.addEventListener('click', showName);
refs.cardFull.addEventListener('click', showFullCard);


function goFindPokemon () {
    
    fetchPokemon(randomPokemon())
    .then(renderPokemonImg)
    .catch(error => console.log(error))
    pokemonName = getNamePokemon(number);
    return pokemonName;
};

function showName () {
    fetchPokemon(number)
    .then(renderPokemonName)    
    .catch(error => console.log(error))
};


function showFullCard () {
    fetchPokemon(number)
    .then(renderPokemonCard)
    .catch(error => console.log(error))
}

function onCheck (e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    if (searchQuery.toLowerCase() === pokemonName){
        return alert(`YOU WIN POKEMON NAME IS ${pokemonName}`)
    }
   return alert(`YOU LOSE :( TRUE POKEMON NAME IS: ${pokemonName}`) 
    

}

 function fetchPokemon (num) {
   return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
.then(response => {return response.json()});
 }

function getNamePokemon (number) {
    return fetchPokemon(number).then(pokemon => (pokemonName = pokemon.name))
}


 function renderPokemonImg (pokemon) {
    const markup = templPokemonImg(pokemon);
    refs.cardImg.innerHTML = markup;
    refs.cardName.innerHTML = '';
    refs.cardContainer.innerHTML = '';

 }

 function renderPokemonName (pokemon) {
    const markup = templPokemonName(pokemon);
    refs.cardName.innerHTML = markup;
 }

 function renderPokemonCard (pokemon) {
    const markup = templPokemonCard(pokemon);
    refs.cardContainer.innerHTML = markup;
 }

 function randomPokemon () {
    number = Math.floor(Math.random() * 800)
    return number;
 }
