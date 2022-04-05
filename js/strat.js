//Globals ****************************************
let beforeBattle = [];
let commandPhase = [];
let movementPhase = [];
let psychicPhase = [];
let shootingPhase = [];
let chargePhase = [];
let fightPhase = [];
let moralePhase = [];
let anyPhase = [];

let main = document.getElementById('main');

// Constructors *********************************
function before(name, description) {
    this.name = name;
    this.description = description;

    beforeBattle.push(this);
}

function command(name, description) {
    this.name = name;
    this.description = description;
    commandPhase.push(this);
}

function movement(name, description) {
    this.name = name;
    this.description = description;
    movementPhase.push(this);
}

function psychic(name, description) {
    this.name = name;
    this.description = description;
    psychicPhase.push(this);
}

function shooting(name, description) {
    this.name = name;
    this.description = description;
    shootingPhase.push(this);
}

function charge(name, description) {
    this.name = name;
    this.description = description;
    chargePhase.push(this);
}

function fight(name, description) {
    this.name = name;
    this.description = description;
    fightPhase.push(this);
}

function morale(name, description) {
    this.name = name;
    this.description = description;
    moralePhase.push(this);
}

function any(name, description) {
    this.name = name;
    this.description = description;
    anyPhase.push(this);
}

//Before Battle ********************************************
let armory = new before('Armory of Titan', 'Use this strategem before the battle, when you are mustering your army, if your warlord has the grey knights keyword. Select one grey knights character model from your army and give them one relic of titan (this must be a relic they could have.) Each relic in your army must be unique, and you cannot use this strategem to give a model two relics. You can only use this strategem once, unless you are playing a strike force battle or an onslaught battle.');
let exemplar = new before('Exemplar of the Silvered Host', 'Use this strategem after nominating a grey knights character model that is not a named character to be your warlord. Gnerate one additional warlord trait for them; this must be from the grey knights warlord trats table. Each warlord trait in your army must be unique. You can only use this strategem once.');



// Construction functions **********************************
function buildBeforeBattle() {
    let h1 = document.createElement('h1');
    h1.textContent = `Before Battle`;
    main.appendChild(h1);

    for (let i = 0; i < beforeBattle.length; i++) {
        let section = document.createElement('section');
        main.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = beforeBattle[i].name;
        section.appendChild(h2);

        let pd = document.createElement('p');
        pd.textContent = beforeBattle[i].description;
        section.appendChild(pd);
    }
} buildBeforeBattle();
