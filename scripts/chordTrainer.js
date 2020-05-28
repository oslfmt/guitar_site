function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Generates a random note, accidentals included, based on random number and returns note
 */
function getRandomNote() {
    let randomNote;

    switch (getRandomNum(0, 16)) {
        case 0:
            randomNote = 'A';
            break;
        case 1:
            randomNote = 'A#';
            break;
        case 2:
            randomNote = 'Bb';
            break;
        case 3:
            randomNote = 'B';
            break;
        case 4:
            randomNote = 'C';
            break;
        case 5:
            randomNote = 'C#';
            break;
        case 6:
            randomNote = 'Db';
            break;
        case 7:
            randomNote = 'D';
            break;
        case 8:
            randomNote = 'D#';
            break;
        case 9:
            randomNote = 'Eb';
            break;
        case 10:
            randomNote = 'E';
            break;
        case 11:
            randomNote = 'F';
            break;
        case 12:
            randomNote = 'Gb';
            break;
        case 13:
            randomNote = 'G';
            break;
        case 14:
            randomNote = 'G#';
            break;
        case 15:
            randomNote = 'Ab';
            break;
    }
    return randomNote;
}

function getRandomQuality() {
    let randomQuality;

    switch (getRandomNum(0, 5)) {
        case 0:
            randomQuality = 'Half-Diminished';
            break;
        case 1:
            randomQuality = 'Full-Diminished';
            break;
        case 2:
            randomQuality = 'Dominant';
            break;
        case 3:
            randomQuality = 'major7';
            break;
        case 4:
            randomQuality = 'minor7';
            break;
    }
    return randomQuality;
}

let randomChord = getRandomNote() + ' ' + getRandomQuality();
console.log(randomChord);