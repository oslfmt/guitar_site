const key = '5c9e5be31e6947c2a2a1b331f7f83347';
const searchURI = 'https://api.spotify.com/v1/search';
const authorizeURI = 'https://accounts.spotify.com/api/token';

// query selectors
const songForm = document.querySelector('form');

async function getSong(song) {
    const query = `?q=${song}&type=artist`;

    const response = await fetch(searchURI + query);
    return response
}

songForm.addEventListener('submit', e => {
    e.preventDefault();
    const song = songForm.song.value.trim();
    songForm.reset();

    // get song data from spotify api
    getSong(song)
        .then(data => console.log(data))
        .catch(err => console.log(err));
});

