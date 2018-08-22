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

class Kevin {
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

// document.getElementById('snorlax').addEventListener('click', function mytoggle(element) {
//     element.classList.toggle("mystyle");
//         let div = document.createElement('div')
//     div.innerHTML = `Name: ${snorlax.name}
//                      hp: ${snorlax.hp},
//                      Attack: ${snorlax.attack},
//                      Defense: ${snorlax.defense}
//                      Abilities: ${snorlax.abilityarray}`
//     let target = document.querySelector('target')
//     target.prepend(div)
//  })
  



