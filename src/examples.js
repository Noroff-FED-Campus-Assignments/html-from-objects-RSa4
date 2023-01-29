// InnerHTML basic example
document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hi! This content come from javascript</h1>
    <div class="card">
      <button id="counter" type="button">Click Me</button>
    </div>
    <p class="more-info">
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    </p>
  </div>
`;

// HTML from object
const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 0,
  isFriendly: true,
  name: "Benny",
  makeSound: function () {
    return "Oink";
  },
};

function formatIsFriendly(isFriendly) {
  return isFriendly ? "Yes" : "No";
}

const petDetail = document.querySelector("#js-pet-detail");
petDetail.innerHTML = `
<h4 style="color: ${pet.colour}">${pet.type}</h4>
<p>Age: ${pet.age}</p>
<p>Friendly: ${formatIsFriendly(pet.isFriendly)}</p>
<p style="color: ${pet.colour}">Name: ${pet.name} </p>
<p>Name: ${pet.name} makes this sound ${pet.makeSound()} </p>
`;

// HTML from array
const cars = [
  {
    name: "The BMW M3 E30",
    brand: "BMW",
    price: 10e8,
    electric: false,
  },
  {
    name: "Model 3",
    brand: "Tesla",
    price: 10e5,
    electric: true,
  },
  {
    name: "Q4 e-tron",
    brand: "Audi",
    price: 7e6,
    electric: true,
  },
];

let html = "";

for (let i = 0; i < cars.length; i++) {
  let colour = "green";

  if (cars[i].soldOut === true) {
    colour = "red";
  }

  html += `
  <div class="car">
    <h2 style="color: ${colour}">${cars[i].name}</h2>
    <p>Brand: ${cars[i].brand}</p>
    <p>Is Electric: ${cars[i].electric}</p>
  </div>
`;
}

document.querySelector("#cars").innerHTML = html;

const pokemon = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
  },
];

function createPokemonHTMLList(pokemonList) {
  let newHTML = "";

  for (const pokemon of pokemonList) {
    const pokemonHTML = `<li>${pokemon.name}</li>`;
    newHTML += pokemonHTML;
  }

  return newHTML;
}

document.querySelector("#js-pokemon").innerHTML =
  createPokemonHTMLList(pokemon);

document.querySelector("#makePokemon").addEventListener("click", function () {
  document.querySelector("#js-pokemon").innerHTML =
    createPokemonHTMLList(pokemon);
});
