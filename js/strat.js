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
let hr = document.createElement('hr');

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

function movement(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    movementPhase.push(this);
}

function psychic(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    psychicPhase.push(this);
}

function shooting(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    shootingPhase.push(this);
}

function charge(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    chargePhase.push(this);
}

function fight(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    fightPhase.push(this);
}

function morale(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    moralePhase.push(this);
}

function any(name, description, type, cost) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.cost = cost;
    anyPhase.push(this);
}

// Any Phase ************************************************
let empyricDec = new any('Empyric Declamation', 'Use this strategem at the start of any of your phases. Select on brotherhood chaplain unit from your army that has not recited a litany since the start of your last command phase. That model can recite one litany that has not already been recited by a friendly model since the start of your last command phase. That litany is automatically inspiring (do not roll) and takes effect until the start of your next command phase.', 'Free litany from Chaplain', 2);
let finestHour = new any('Finest Hour', 'Use this strategem at the start of any phase. Select one grey knights character unit from your army. Until the end of the turn, add 3 inches to the range of that units aura abilities.', 'Extend aura circumfrence', 1);
let trueArmor = new any('Truesilver Armor', 'Use this strategem in any phase, when a grey knights core infantry unit from your army is selected as the target of an attack. Until the end of the phase, each time an attack is made against that unit, an unmodified wound roll of 1-3 for that attack fails, irrespective of any abilities that the weapon or the model making the attack may have. If that unit contains 5 or fewer, this strategem costs 2CP; otherwise, it costs 3CP.', 'Make enemy fail attack on 1-3', 2);

// Any Phase construction zone ******************************
function buildAny() {
    let h1 = document.createElement('h1');
    h1.textContent = `Any Phase`;
    main.appendChild(h1);

    for (let i = 0; i < anyPhase.length; i++) {
        let section = document.createElement('section');
        main.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = anyPhase[i].name;
        section.appendChild(h2);

        let type = document.createElement('p');
        type.textContent = `Quick reference: ${anyPhase[i].type}`;
        section.appendChild(type);

        let pd = document.createElement('p');
        pd.textContent = anyPhase[i].description;
        section.appendChild(pd);

        let cost = document.createElement('p');
        cost.textContent = `${anyPhase[i].cost} Command point(s)`;
        section.appendChild(cost);
    }
} buildAny();

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

// Movement Phase ************************************************
let chirurgRez = new movement('Chirurgic Resurrection','Use this strategem at the end of your movement phase. Select one grey knights apothecary unit from your army and then select one friendly grey knights infantry unit that is not at its starting strength and is within 3 inches of that apothecary. One of the selected units destroyed models is returned to its unit with its full wounds remaining.', 'Quick rez', 1);


// Movement Phase construction zone ******************************
function buildMovement() {
    let h1 = document.createElement('h1');
    h1.textContent = `Movement Phase`;
    main.appendChild(h1);

    for (let i = 0; i < movementPhase.length; i++) {
        let section = document.createElement('section');
        main.appendChild(section);

        let h2 = document.createElement('h2');
        h2.textContent = movementPhase[i].name;
        section.appendChild(h2);

        let type = document.createElement('p');
        type.textContent = `Quick reference: ${movementPhase[i].type}`;
        section.appendChild(type);

        let pd = document.createElement('p');
        pd.textContent = movementPhase[i].description;
        section.appendChild(pd);

        let cost = document.createElement('p');
        cost.textContent = `${movementPhase[i].cost} movement point(s)`;
        section.appendChild(cost);
    }
} buildMovement();


