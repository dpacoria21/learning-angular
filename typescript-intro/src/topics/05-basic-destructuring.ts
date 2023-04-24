
interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    }
}
const song = 'new Song';
// const {song: anotherSong, songDuration: duration, audioVolume: volumen, details: {author, year}} = audioPlayer;
const {song: anotherSong, songDuration: duration, audioVolume: volumen, details} = audioPlayer;
const {author, year} = details;

console.log(`Song: ${anotherSong}`);
console.log(`Duration: ${duration}`);
console.log(`Author: ${author}`);
console.log(`Year: ${year}`);
console.log(`audioVolume: ${volumen}`);
export {}