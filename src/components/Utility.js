import aqua from "./raw/races/aqua-yugi.png";
import beastWarrior from "./raw/races/beast-warrior-yugi.png";
import beast from "./raw/races/beast-yugi.png";
import creatorGod from "./raw/races/creator-god-yugi.png";
import cyberse from "./raw/races/cyberse-yugi.png";
import dinosaur from "./raw/races/dinosaur-yugi.png";
import divineBeast from "./raw/races/divine-beast-yugi.png";
import dragon from "./raw/races/dragon-yugi.png";
import fairy from "./raw/races/fairy-yugi.png";
import fiend from "./raw/races/fiend-yugi.png";
import fish from "./raw/races/fish-yugi.png";
import insect from "./raw/races/insect-yugi.png";
import machine from "./raw/races/machine-yugi.png";
import plant from "./raw/races/plant-yugi.png";
import psychic from "./raw/races/psychic.png";
import pyro from "./raw/races/pyro.png";
import reptile from "./raw/races/reptile.png";
import rock from "./raw/races/rock.png";
import seaSerpent from "./raw/races/sea-serpent.png";
import spellCaster from "./raw/races/spellcaster-png.webp";
import thunder from "./raw/races/thunder.png";
import warrior from "./raw/races/warrior.png";
import wingedBeast from "./raw/races/winged-beast.png";
import wyrm from "./raw/races/wyrm.png";
import zombie from "./raw/races/zombie.png";
import normalSpell from "./raw/spell-trap-types/normal-spell.png";
import fieldSpell from "./raw/spell-trap-types/field-spell.png";
import equipSpell from "./raw/spell-trap-types/equip-spell.png";
import continuousSpell from "./raw/spell-trap-types/continuous-spell.png";
import quickPlay from "./raw/spell-trap-types/quick-play-spell.png";
import ritualSpell from "./raw/spell-trap-types/ritual-spell.png";
import normalTrap from "./raw/spell-trap-types/normal-trap.png";
import continuousTrap from "./raw/spell-trap-types/continuous-trap.png";
import counterTrap from "./raw/spell-trap-types/counter-trap.png";
import spell from "./raw/attributes/spell-yugi.png";
import trap from "./raw/attributes/trap-yugi.png";
import fire from "./raw/attributes/fire-yugi.png";
import water from "./raw/attributes/water-yugi.png";
import light from "./raw/attributes/light-yugi.png";
import dark from "./raw/attributes/dark-yugi.png";
import wind from "./raw/attributes/wind-yugi.png";
import earth from "./raw/attributes/earth-yugi.png";
import divine from "./raw/attributes/divine-yugi.png";

/*set the race images to the card*/
function setRaceImages(race) {
    if (race === 'Aqua') return aqua;
    else if (race === 'Beast-Warrior') return beastWarrior;
    else if (race === 'Beast') return beast;
    else if (race === 'Creator-God') return creatorGod;
    else if (race === 'Cyberse') return cyberse;
    else if (race === 'Dinosaur') return dinosaur;
    else if (race === 'Divine-Beast') return divineBeast;
    else if (race === 'Dragon') return dragon;
    else if (race === 'Fairy') return fairy;
    else if (race === 'Fiend') return fiend;
    else if (race === 'Fish') return fish;
    else if (race === 'Insect') return insect;
    else if (race === 'Machine') return machine;
    else if (race === 'Plant') return plant;
    else if (race === 'Psychic') return psychic;
    else if (race === 'Pyro') return pyro;
    else if (race === 'Reptile') return reptile;
    else if (race === 'Rock') return rock;
    else if (race === 'Sea Serpent') return seaSerpent;
    else if (race === 'Spellcaster') return spellCaster;
    else if (race === 'Thunder') return thunder;
    else if (race === 'Warrior') return warrior;
    else if (race === 'Winged Beast') return wingedBeast;
    else if (race === 'Wyrm') return wyrm;
    else if (race === 'Zombie') return zombie;
    else if (race === 'Normal') return normalSpell;
    else if (race === 'Field') return fieldSpell;
    else if (race === 'Equip') return equipSpell;
    else if (race === 'Continuous') return continuousSpell;
    else if (race === 'Quick-Play') return quickPlay;
    else if (race === 'Ritual') return ritualSpell;
    else if (race === 'Normal') return normalTrap;
    else if (race === 'Continuous') return continuousTrap;
    else if (race === 'Counter') return counterTrap;

}

/*set the attribute images to the card*/
function setAttributes(attribute) {
    if (attribute === 'Spell Card') return spell;
    else if (attribute === 'Trap Card') return trap;
    else if (attribute === 'FIRE') return fire;
    else if (attribute === 'WATER') return water;
    else if (attribute === 'LIGHT') return light;
    else if (attribute === 'DARK') return dark;
    else if (attribute === 'WIND') return wind;
    else if (attribute === 'EARTH') return earth;
    else if (attribute === 'DIVINE') return divine;

}



export {setRaceImages, setAttributes};