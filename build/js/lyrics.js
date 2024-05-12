// Import
import ifICanStopOneHeartFromBreaking from './song-lyrics/if-i-can-stop-one-heart-from-breaking.js'
import swayToMyBeatInCosmos from './song-lyrics/sway-to-my-beat-in-cosmos.js'
import hopeIsTheThingWithFeathers from './song-lyrics/hope-is-the-thing-with-feathers.js'

// Songs List
const songList = [
    ['If I Can Stop One Heart From Breaking', ifICanStopOneHeartFromBreaking],
    ['Sway To My Beat In Cosmos', swayToMyBeatInCosmos],
    ['Hope Is The Thing With Feathers', hopeIsTheThingWithFeathers]
];

const songData = {};

for (let i = 0; i < songList.length; i++) {
    const title = songList[i][0];
    const getData = songList[i][1];

    songData[createHTMLId(title)] = {
        title: title,
        lyrics: getData('lyrics'),
        audio: getData('audio'),
        video: getData('video')
    };
};

// Navigation Bar
const displayNavBar = () => {
    const template = document.getElementById('song-title-template');
    const navigation = document.getElementById('header');

    for (let i = 0; i < songList.length; i++) {
        const title = songList[i][0];
        const songId = createHTMLId(title);

        const item = template.content.cloneNode(true);
        const tab = item.querySelector('p');
     
        tab.setAttribute('id', songId);
        tab.textContent = title;
    
        navigation.append(item);
    };
};

displayNavBar();
document.getElementById('header').removeChild(document.getElementById('song-title-template'));

// Lyrics
const displayContent = (event) => {
    const selectedSongId = event.target.id;
    console.log(selectedSongId);
    
    // Title & Lyrics
    let activeTitle = songData[selectedSongId].title;
    let activeLyrics = songData[selectedSongId].lyrics;
    // let audioSource = songData[selectedSongId].audio;
    let videoSource = songData[selectedSongId].video;

    document.getElementById('song-title').textContent = activeTitle;
    document.getElementById('song-lyrics').innerHTML = activeLyrics;
    document.getElementById('videos').innerHTML = videoSource;
};

displayContent({
    target: {
        id: createHTMLId(songList[0][0])
    }
});

// Event Listeners
document.getElementById('header').addEventListener('click', displayContent);

// Functions
function createHTMLId(text) {
    return text.replaceAll(' ', '-').toLowerCase();
};