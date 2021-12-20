import bass from "../assets/sounds/bass.mp3";
import funk from "../assets/sounds/funk.mp3";
import fud from "../assets/sounds/fud.mp3";
import breakbeats from "../assets/sounds/breakbeats.mp3";
import electric from "../assets/sounds/electric.mp3";
import groove from "../assets/sounds/groove.mp3";
import groov2 from "../assets/sounds/groov2.mp3";
import politics from "../assets/sounds/politics.mp3";
import silent from "../assets/sounds/silent.mp3";
var currSound;
var interval;
const sounds = [
  bass,
  funk,
  fud,
  breakbeats,
  electric,
  groove,
  groov2,
  politics,
  silent,
];
export function playSound(name) {
  const soundName = sounds.filter((sound) => sound.includes(name));
  const sound = new Audio(soundName);
  sound.play();
  currSound = sound;
}
export function pouseSound(numOf) {
  if (numOf === "sound") {
    const sound = currSound;
    sound.currentTime = 0;
    sound.pause();
  } else {
    if (interval) clearInterval(interval);
    currSound.map((sound) => {
      sound.currentTime = 0;
      return sound.pause();
    });
  }
}
export function playAllSounds() {
  currSound = [];
  sounds.map((sound, idx) => {
    idx = new Audio(sound);
    currSound.push(idx);
    idx.play();
    return currSound;
  });
}
export function playInLoop() {
  playAllSounds();
  interval = setInterval(playAllSounds, 8000);
}
