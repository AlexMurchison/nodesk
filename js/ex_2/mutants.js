const xmen = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast',
'Phoenix', 'Logan', 'Gambit', 'Wolverine', 'Mystique', 'Rogue'];

xmen.forEach(function (mutant, index) {
    console.log(mutant);
    if (mutant === 'Magneto' || mutant === 'Mystique') {
        console.log(`${mutant} is not part of the X-Men! Removing from list...`);
        xmen.splice(index, 1);
    } else {
        console.log(`${mutant} is part of the X-Men!`)
    }
});

console.log(xmen);