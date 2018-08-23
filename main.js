document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

class Pokemon {
    constructor (name, hp, attack, defense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

class Trainer {
    constructor (pokemon1, pokemon2, pokemon3) {
        var ash = []
        var pokemonobject1 = {
            name:pokemon1.name,
            hp:pokemon1.hp,
            attack:pokemon1.attack,
            defense:pokemon1.defense,
            abilities:pokemon1.abilities
        }
        ash.push(pokemonobject1)
        var pokemonobject2 = {
            name:pokemon2.name,
            hp:pokemon2.hp,
            attack:pokemon2.attack,
            defense:pokemon2.defense,
            abilities:pokemon2.abilities
        }
        ash.push(pokemonobject2)
        var pokemonobject3 = {
            name:pokemon3.name,
            hp:pokemon3.hp,
            attack:pokemon3.attack,
            defense:pokemon3.defense,
            abilities:pokemon3.abilities
        }
        ash.push(pokemonobject3)
    }
    all () {
        return ash;
    }
    get (name){
        for (let i=0; i<ash.length; i++){
            if (ash['name'] == name){
                return ash[i];
            }
        }

    }       
}

  
let snorlaxpromise = axios.get("http://fizal.me/pokeapi/api/143.json")
let umbreonpromise = axios.get("http://fizal.me/pokeapi/api/197.json")
let gyaradospromise = axios.get("http://fizal.me/pokeapi/api/130.json")

snorlaxpromise.then(response => {
    let data = response.data
    var abilityarray = [] 
    for (let i = 0; i<data.abilities.length; i++) {
        abilityarray[i] = data.abilities[i]
    }
     snorlax = new Pokemon( 
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      abilityarray
    )
});

umbreonpromise.then(response => {
    let data = response.data
    var abilityarray = [] 
    for (let i = 0; i<data.abilities.length; i++) {
        abilityarray[i] = data.abilities[i]
    }
     umbreon = new Pokemon( 
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      abilityarray
    )
});

gyaradospromise.then(response => {
    let data = response.data
    var abilityarray = [] 
    for (let i = 0; i<data.abilities.length; i++) {
        abilityarray[i] = data.abilities[i]
    }
     gyarados = new Pokemon( 
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      abilityarray
    )
    
});


  
document.getElementById("snorlax").addEventListener("click", function() {
    document.getElementById("name").innerHTML = `${snorlax.name}`
    document.getElementById("hp").innerHTML = `${snorlax.hp}`;
    document.getElementById("attack").innerHTML= `${snorlax.attack}`;
    document.getElementById("defense").innerHTML = `${snorlax.defense}`;

    document.getElementById("abilities").innerHTML = ""
    for (let i=0; i<snorlax.abilities.length-1; i++){
        document.getElementById("abilities").innerHTML += `${snorlax.abilities[i].ability.name}` + ", ";

    }
    document.getElementById("abilities").innerHTML += snorlax.abilities[snorlax.abilities.length-1].ability.name
});

document.getElementById("umbreon").addEventListener("click", function() {
    document.getElementById("name").innerHTML = `${umbreon.name}`
    document.getElementById("hp").innerHTML = `${umbreon.hp}`;
    document.getElementById("attack").innerHTML= `${umbreon.attack}`;
    document.getElementById("defense").innerHTML = `${umbreon.defense}`;
    
    document.getElementById("abilities").innerHTML = ""
    for (let i=0; i<umbreon.abilities.length-1; i++){
        document.getElementById("abilities").innerHTML += `${umbreon.abilities[i].ability.name}` + ", ";

    }
    document.getElementById("abilities").innerHTML += umbreon.abilities[umbreon.abilities.length-1].ability.name
});

document.getElementById("gyarados").addEventListener("click", function() {
    document.getElementById("name").innerHTML = `${gyarados.name}`
    document.getElementById("hp").innerHTML = `${gyarados.hp}`;
    document.getElementById("attack").innerHTML= `${gyarados.attack}`;
    document.getElementById("defense").innerHTML = `${gyarados.defense}`;
    
    document.getElementById("abilities").innerHTML =""
    for (let i=0; i<gyarados.abilities.length-1; i++){
        document.getElementById("abilities").innerHTML += `${gyarados.abilities[i].ability.name}` + ", ";

    }
    document.getElementById("abilities").innerHTML += gyarados.abilities[gyarados.abilities.length-1].ability.name
});

  


