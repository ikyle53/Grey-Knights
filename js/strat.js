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
function before(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.type = type;
    beforeBattle.push(this);
}

function command(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.type = type;
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
let armory = new before('Armory of Titan', 'Use this strategem before the battle, when you are mustering your army, if your warlord has the grey knights keyword. Select one grey knights character model from your army and give them one relic of titan (this must be a relic they could have.) Each relic in your army must be unique, and you cannot use this strategem to give a model two relics. You can only use this strategem once, unless you are playing a strike force battle or an onslaught battle.', 'Add Relic', 1);
let exemplar = new before('Exemplar of the Silvered Host', 'Use this strategem after nominating a grey knights character model that is not a named character to be your warlord. Gnerate one additional warlord trait for them; this must be from the grey knights warlord trats table. Each warlord trait in your army must be unique. You can only use this strategem once.', 'Add warlord trait', 1);
let shieldHumanity = new before('Shield of Humanity', 'Use this strategem before the battle, when you are mustering your army, if your warlord has the grey knights keyword. Select one grey knights character from your army and determine one warlord trait for that model; that model is only regarded as your warlord for the purposes of that warlord trait. Each warlord trait in your army must be unique, and you cannot use this strategem to give a model two warlord traits. You can only use this strategem once.', 'Re-pick warlord trait', 1);
let endowment = new before('Endowment in Extremis', 'Use this strategem before the battle. Select one Grey Knights model from your army that has one of the following in their profile: Justicar, Paragon, Knight of the Flame. That model can have one of the following relics of Titan, even though they are not a character: Domina Liber Daemonica; Sanctic Shard; Augmurium Scrolls; Stave of Supremecy. All of the relics your army includes must be different and be given to different models.', 'Add relic to model', 1);

// Before Battle construction functions **********************************
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

        let type = document.createElement('p');
        type.textContent = `Quick reference: ${beforeBattle[i].type}`;
        section.appendChild(type);

        let pd = document.createElement('p');
        pd.textContent = beforeBattle[i].description;
        section.appendChild(pd);

        let cost = document.createElement('p');
        cost.textContent = `${beforeBattle[i].cost} Command point(s)`;
        section.appendChild(cost);
    }
} buildBeforeBattle();


// Command Phase ************************************************
let shadowUndying = new command('Shadow of Undying Legends', 'Use this strategem in your command phase. Select one grey knights dreadnought model from your army. Until the start of your next command phase, that model gains either the Rites of Battle ability or the Tactical Precision ability. -Rites of Battle(Aura): While a friendly grey knights core unit is wihtin 6inches of this model, each time a model in that unit makes an attack, re-roll a hit roll of 1. -Tactical Precicion(Aura): While a friendly grey knights core unit is within 6inches of this model, each time a model in that unit makes an attack, re-roll a wound roll of 1.', 'Give dreadnought aura', 1);
let purityMachine = new command('Purity of the Machine Spirit', 'Use this strategem in your command phase. Select one grey knights machine spirit model from your army. Until the start of the next command phase, that model is considered to have its full wounds remaining for the purposes of determining what characteristics on its profile to use.', 'Give full wounds to vehicles to determine characteristics', 2);
let masterWords = new command('Masters of the Word', 'Use this strategem in your command phase. Select one wardmakers character unit from your army. Select one psychich power from the Dominus discipline that model does not know to replace one of the psychic powers that it does.', 'Re-pick psychic power', 1);


// Command Phase construction zone ******************************
function buildCommandPhase() {
    let h1 = document.createElement('h1');
    h1.textContent = `Command Phase`;
    main.appendChild(h1);

    for (let i = 0; i < commandPhase.length; i++) {
        let section = document.createElement('section');
        main.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = commandPhase[i].name;
        section.appendChild(h2);

        let type = document.createElement('p');
        type.textContent = `Quick reference: ${commandPhase[i].type}`;
        section.appendChild(type);

        let pd = document.createElement('p');
        pd.textContent = commandPhase[i].description;
        section.appendChild(pd);

        let cost = document.createElement('p');
        cost.textContent = `${commandPhase[i].cost} Command point(s)`;
        section.appendChild(cost);
    }
} buildCommandPhase();