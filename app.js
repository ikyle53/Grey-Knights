'use strict';

// Globals *********************************************************************************
let unitsArray = [];
const cards = document.getElementById('cards');

// Constructor function *********************************************************************
function unit(type, names, m, ws, bs, s, t, w, a, ld, sv) {
    this.type = type;
    this.names = names;
    this.m = m;
    this.ws = ws;
    this.bs = bs;
    this.s = s;
    this.t = t;
    this.w = w;
    this.a = a;
    this.ls = ld;
    this.sv = sv;

    unitsArray.push(this);
}

// new units *********************************************************************************
let kaldoreDreigo = new unit('HQ', 'Kaldore Dreigo', 5, 2, 2, 4, 4, 7, 6, 9, 2);
let grandMasterVoldus = new unit('HQ', 'Grand Master Voldus', 5, 2, 2, 4, 4, 6, 6, 9, 2);
let grandMaster = new unit('HQ', 'Grand Master', 5, 2, 2, 4, 4, 6, 6, 9, 2);
let grandMasterNd = new unit('HQ', 'Grand Master ND', 9, 2, 2, 6, 6, 13, 6, 9, 2);
let castellanCrowe = new unit('HQ', 'Castellan Crowe', 6, 2, 2, 4, 4, 5, 6, 8, 2);
let brotherCaptainStern = new unit('HQ', 'Brother Captain Stern', 5, 2, 2, 4, 4, 6, 6, 9, 2);
let brotherCaptain = new unit('HQ', 'Brother Captain', 5, 2, 2, 4, 4, 6, 5, 9, 2);
let brotherhoodChampion = new unit('HQ', 'Brotherhood Champion', 6, 2, 2, 4, 4, 4, 5, 8, 2);
let brotherhoodLibrarian = new unit('HQ', 'Brotherhood Librarian', 5, 3, 3, 4, 4, 5, 4, 9, 2);
let brotherhoodTechmrine = new unit('HQ', 'Brotherhood Techmarine', 6, 3, 2, 4, 4, 4, 4, 8, 2);
let brotherhoodChaplain = new unit('HQ', 'Brotherhood Chaplain', 5, 2, 3, 4, 4, 5, 4, 9, 2);
let brotherhoodTerminatorSquad = new unit('Troop', 'Brotherhood Terminator Squad', 5, 3, 3, 4, 4, 3, 3, 7, 2);
let strikeSquad = new unit('Troop', 'Strike Squad', 6, 3, 3, 4, 4, 2, 3, 7, 3);
let brotherhoodApothecary = new unit('Elite', 'Brotherhood Apothecary', 5, 3, 3, 4, 4, 5, 5, 8, 2);
let brotherhoodAncient = new unit('Elite', 'Brotherhood Ancient', 5, 3, 3, 4, 4, 5, 4, 8, 2);
let paladinSquad = new unit('Elite', 'Paladin Squad', 5, 2, 3, 4, 4, 3, 4, 8, 2);
let purifierSquad = new unit('Elite', 'Purifier Squad', 6, 3, 3, 4, 4, 2, 3, 8, 3);
let paladinAncient = new unit('Elite', 'Paladin Ancient', 5, 2, 3, 4, 4, 5, 5, 9, 2);
let servitors = new unit('Elite', 'Servitors', 5, 5, 5, 3, 3, 1, 1, 6, 4);
let venerableDreadnought = new unit('Elite', 'Venerable Dreadnought', 6, 2, 2, 6, 7, 8, 5, 8, 3);
let dreadnought = new unit('Elite', 'Dreadnought', 6, 3, 3, 6, 7, 8, 5, 8, 3);
let interceptorSquad = new unit('Fast Attack', 'Interceptor Squad', 12, 3, 3, 4, 4, 2, 3, 7, 3);
let purgationSquad = new unit('Heavy Support', 'Purgation Squad', 6, 3, 3, 4, 4, 2, 3, 7, 3);
let nemesisDreadknight = new unit('Heavy Support', 'Nemesis Dreadknight', 9, 3, 3, 6, 6, 13, 5, 8, 2);
let landRaider = new unit('Heavy Support', 'Land Raider', 10, 6, 3, 8, 8, 16, 6, 9, 2);
let landRaiderCrusader = new unit('Heavy Support', 'Land Raider Crusader', 10, 6, 3, 8, 8, 16, 6, 9, 2);
let landRaiderRedeemer = new unit('Heavy Suport', 'Land Raider Redeemer', 10, 6, 3, 8, 8, 16, 6, 9, 2);
let razorback = new unit('Transport', 'Razorback', 12, 6, 3, 6, 7, 10, 3, 8, 3);
let rhino = new unit('Transport', 'Rhino', 12, 6, 3, 6, 7, 10, 3, 8, 3);
let stormhawkInterceptor = new unit('Flyer', 'Stormhawk Interceptor', `20-60`, 6, 3, 6, 7, 10, 3, 8, 3);
let stormtalonGunship = new unit('Flyer', 'Stormtalon Gunship', `20-50`, 6, 3, 6, 6, 10, 3, 8, 3);
let stormravenGunship = new unit('Flyer', 'Stormraven Gunship', `20-45`, 6, 3, 8, 7, 14, 6, 9, 3);

// Loop function to append html elements *********************************************************

function createCards() {
    
    
    for (let i = 0; i < unitsArray.length; i++) {
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        cards.appendChild(section);
        section.appendChild(h2);
        h2.textContent = unitsArray[i].names;
    }
} createCards();
        
//1. Grab <main> by ID (line 5)
//2. Create loop for my array and count the length (line 64)
//3. Append sections for each item in the array (line 65)
//4. Append paragraphs to the sections (line 66)
//5. Make the paragraph text the value of 'names' in each index (line 67)